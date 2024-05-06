import EditProfileInfoForm from '@/components/EditProfileInfoForm'
import Navbar from '@/components/Navbar'
import React, {useState, useEffect} from 'react'

const profile = ({user, logout}) => {
  const [editForm, seteditForm] = useState(false);
  
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
    }
    const token = JSON.parse(localStorage.getItem('token'));
    console.log("token+++", token);
    func1(token);
  },[])

  const handleEditClick = (event) => {
    event.preventDefault();
    seteditForm(!editForm);
  }

  return (
    <div>
      <Navbar user={user} logout={logout}/>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        {/* <p className="text-4xl my-2">Profile Info : </p> */}
        <button onClick={handleEditClick}>Want to Edit?</button>
      </div>
      <div className="w-[80%] m-auto">
        <EditProfileInfoForm editForm={editForm}/>
      </div>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        <p className="text-4xl my-2">Transcripts</p>
      </div>
      <div className="flex mx-20 my-10 justify-center">
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
      </div>
    </div>
  )
}

export default profile

// export async function getServerSideProps(context){
//   console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
  
//   return{
//     props:{profile: profile}
//   }
// }
