import EditProfileInfoForm from '@/components/EditProfileInfoForm'
import Navbar from '@/components/Navbar'
import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/Footer';

const profile = ({user, logout}) => {
  const [editForm, seteditForm] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [about, setabout] = useState("");
  const [editpasswordform, seteditpasswordform] = useState(false);
  const [transcripts, settranscripts] = useState([]);
  
  useEffect(()=>{
    const func1 = async(token) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/profile`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: token
        }),
      });
      let profile = await response.json();
      console.log(profile);
      setname(profile.name);
      setemail(profile.email);
      setabout(profile.about);
      const response1 = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_related_to_user`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: profile.email
        }),
      });
      let tmp = await response1.json();
      console.log(tmp);
      settranscripts(tmp);
    }
    const token = JSON.parse(localStorage.getItem('token'));
    console.log("token+++", token);
    func1(token);
  },[])

  const handleNameChange = (name) => {
    setname(name);
  };
  const handleAboutChange = (about) => {
    setemail(about);
  };
  const handlePasswordChange = (passwd) => {
    setpassword(passwd);
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    seteditForm(!editForm);
  }

  const onSubmitPersonalInfo = async() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/profile/update`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        about: about,
        password: password,
        token: token
      }),
    });
    let res = await response.json();
    if(response.status==200){
      toast.success("Profile Updated Successfully!!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      toast.error("Some Error Occured, Contact Admin!!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleEditPasswordClick = (event) => {
    event.preventDefault();
    seteditpasswordform(!editpasswordform);
  }

  const additionalFields = [
    {name: 'Category',apiname:'category'},
    {name: 'SubCategory',apiname:'subCategory'},
    {name: 'Mode',apiname:'interview_mode'},
    {name: 'Year Of Interview',apiname:'year_of_interview'},
    {name: 'Status',apiname:'status'},
    {name: 'Rating',apiname:'rating'}
  ]

  return (
    <>
    <div>
      <ToastContainer />
      <Navbar user={user} logout={logout}/>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        {/* <p className="text-4xl my-2">Profile Info : </p> */}
        <button onClick={handleEditClick}>Want to Edit?</button>
        {editForm && <button onClick={handleEditPasswordClick}>Want to Enter New Password?</button>}
      </div>
      <div className="w-[80%] m-auto">
        <EditProfileInfoForm editForm={editForm} editpasswordform={editpasswordform} name={name} about={about} email={email} handleNameChange={handleNameChange} handleAboutChange={handleAboutChange} handlePasswordChange={handlePasswordChange} onSubmitPersonalInfo={onSubmitPersonalInfo}/>
      </div>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        <p className="text-4xl my-2">Transcripts</p>
      </div>
      {transcripts.length>0 && <div className="flex mx-20 my-10 justify-center">
        <div className="grid grid-cols-3 gap-8 mx-20 my-20 w-full">
          {transcripts.map((transcript) => (
            <Link
              key={transcript._id}
              href={`/transcript/${transcript.slug}`}
              className={`flex flex-col items-center ${indexStyle.blockstyle}`}
            >
              <dt className="mt-4 font-semibold text-2xl text-center mb-4 overflow-hidden h-[5vh]">
                {transcript.interview_name}
              </dt>
              <div className="flex flex-col items-center justify-between w-full">
                <dd className="mt-2 font-semibold text-xl flex flex-row justify-between w-full">
                  <span className="w-1/2"><FontAwesomeIcon
                    icon={faUserTie}
                    className="mr-2"
                    size="xl"
                    style={{ color: "black" }}
                  /></span>
                  <span className="w-2/5">
                  {transcript.user_name}
                  </span>
                </dd>
                {additionalFields.map((item) => (
                  <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">{item.name}</span>
                    <span className="w-2/5 text-white ">{transcript[item.apiname]?transcript[item.apiname]:""}</span>
                  </dd>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => handleReadMoreClick(transcript.slug)}
                >
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>}
      <div className="flex flex-row items-start justify-between w-[80%] m-auto">
        {transcripts.length==0 && <div className='text-3xl'>Transcripts Not Found!!</div>}
      </div>
    </div>
    <div className="mt-32">
      <Footer/>
    </div>
    </>
  )
}

export default profile
