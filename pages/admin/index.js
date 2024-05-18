import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import indexStyle from "../../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/SearchBar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = ({user, logout}) => {
  const router = useRouter();
  // console.log('transcripts++', transcripts);
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transcripts, setTranscripts] = useState([]);
  const [filteredTranscripts, setFilteredTranscripts] = useState([]);
  const [additionalFields, setadditionalFields] = useState([]);

  // useEffect(()=>{
    // if(!localStorage.getItem('admin')){
    //   router.push('/admin/login');
    // }
  // },[])
  useEffect(()=>{
    setLoading(true);
    if(!localStorage.getItem('admin')){
      router.push('/admin/login');
    }
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_status`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "pending"
        }),
      });
      console.log('response++', response);
      if (response.status == 200) {
        let t = await response.json();
        setTranscripts(t);
        setFilteredTranscripts(t);
        console.log("t++", t);
        if(t.length>0){
          const category = t[0].category;
          console.log('category++', category);
          setadditionalFields(categoryAdditionalFields[category].General);
          // console.log('additionalFields++', additionalFields);
        } 
      }
      setLoading(false);
    };

    fetchData();
    
    
  }, [router.query.slug])

  const handleReadMoreClick = (transcriptSlug) => {
    router.push(`/admin/transcript/${transcriptSlug}`);
  };

  const handleProofView=(image)=>{
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getImage?filename=${image}`)
      .then((response) => response.blob())
      .then((blob) => {
        console.log(blob)
        const imageURL = URL.createObjectURL(blob);
        console.log(imageURL);
        setImageUrl(imageURL);
        setLoading(false);
        setShowModal(true);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }

  const handleApproveTranscript = async(id, email) => {
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/admin/transcripts/approve/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    setLoading(false);
    if (response.status==200) {
      toast.success("Transcript Approved Successfully, Refresh the Page to reflect the changes!!", {
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

  const handleRejectTranscript = async(id, email) => {
    setLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/admin/transcripts/reject/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    setLoading(false);
    if (response.status==200) {
      toast.success("Transcript Rejected Successfully, Refresh the Page to reflect the changes!!", {
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

  const categoryAdditionalFields = {
    UPSC: {
      General: [
        { name: "Optional Subject", apiname: "optional_subject" },
        { name: "Gap Years", apiname: "gap_years" },
        { name: "Marks", apiname: "exam_scores" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
      "Civil Services": [
        { name: "Optional Subject", apiname: "optional_subject" },
        { name: "Gap Years", apiname: "gap_years" },
        { name: "Marks", apiname: "exam_scores" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
    },
    MBA: {
      General: [
        { name: "Specialization", apiname: "specialization" },
        { name: "Work Experience", apiname: "work_experience" },
        { name: "CAT/GMAT Score", apiname: "exam_scores" },
        { name: "Year of Admission", apiname: "year_of_interview" },
      ],
      "Internal MBA": [
        { name: "Specialization", apiname: "specialization" },
        { name: "Work Experience", apiname: "work_experience" },
        { name: "CAT/GMAT Score", apiname: "exam_scores" },
        { name: "Year of Admission", apiname: "year_of_interview" },
      ],
    },
    VISA: {
      General: [
        { name: "VISA Type", apiname: "visa_type" },
        {
          name: "Country Applied for VISA",
          apiname: "country_applied_for_visa",
        },
        { name: "Purpose of Travel", apiname: "purpose_of_travel" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
    },
    "Coding & Technical": {
      General: [
        { name: "Programming Languages", apiname: "programming_languages" },
        { name: "Tech Stack Used", apiname: "tech_stack_used" },
        { name: "Work Experience", apiname: "work_experience" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
    },
    "Indian Armed Forces": {
      General: [
        { name: "Service Name", apiname: "service_name" },
        { name: "Branch", apiname: "branch" },
        { name: "Commission Type", apiname: "commission_type" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
    },
    "Bank PO": {
      General: [
        { name: "Bank Name", apiname: "bankName" },
        { name: "Work Experience", apiname: "work_experience" },
        { name: "Year of Interview", apiname: "year_of_interview" },
      ],
    },
  };
  
  const [searchTerm, setSearchTerm] = useState({
    ExamName: "",
    optionalSubject: "",
    work_experience: "",
    gapYear: "",
    yearOfInterview: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = transcripts.filter((transcript) => {
      return additionalFields.every((field) => {
        if (searchTerm[field.apiname]) {
          return transcript[field.apiname]
            ?.toLowerCase()
            .includes(searchTerm[field.apiname].toLowerCase());
        }
        return true;
      });
    });
    setFilteredTranscripts(filtered);
  };

  const handleChange = (e) => {
    setSearchTerm({
      ...searchTerm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div className="h-auto">
        <ToastContainer />
        <Navbar user={user} logout={logout} />
        <div className="flex flex-col items-start justify-center my-12 mx-40">
          <p className="text-4xl my-2">
            Thanks for Giving your time to Share your interview experience with
            us!!
          </p>
          <p className="text-xl my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
            nostrum! Minima veritatis velit asperiores fugit provident, dolore
            rerum quam, commodi cum saepe possimus id incidunt laborum. Quas,
            enim? Rem obcaecati in eos.
          </p>
          <div className="container mx-auto p-4">
            {additionalFields.length>0 && <form
                onSubmit={handleSubmit}
                className="flex flex-wrap items-center justify-center mt-4 text-black"
              >
                <div className="flex items-center w-auto bg-gray-100 py-4 px-6 mb-4 rounded-lg">
                  {additionalFields && additionalFields.map((field) => (
                    <input
                      key={field.apiname}
                      type={field.name==="Gap Years" || field.name==="Marks" || field.name==="Year of Interview" || field.name==="CAT/GMAT Score" || field.name==="Year of Admission" || field.name==="Work Experience"?"number":"text"}
                      name={field.apiname}
                      value={searchTerm[field.apiname] || ""}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
                      placeholder={field.name}
                    />
                  ))}
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-2 px-4 ml-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </form>
            }
            {/* <SearchBar placeholder="Search..." /> */}
          </div>
        </div>
        <div className="flex mx-20 my-10 justify-center">
          <div className="grid grid-cols-3 gap-8 mx-20 my-20 w-full">
            {transcripts.map((transcript) => (
              <Link
                key={transcript._id}
                href={`/admin/transcript/${transcript.slug}`}
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
                  <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">Category</span>
                    <span className="w-2/5 text-white ">{transcript['category']?transcript['category']:""}</span>
                  </dd>
                  <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">Sub-Category</span>
                    <span className="w-2/5 text-white ">{transcript['subCategory']?transcript['subCategory']:""}</span>
                  </dd>
                  <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">Year of Interview</span>
                    <span className="w-2/5 text-white ">{transcript['year_of_interview']?transcript['year_of_interview']:""}</span>
                  </dd>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <button
                    className="text-white focus:outline-none"
                    onClick={(event) => {event.preventDefault();handleProofView(transcript.image_proof);}}
                  >
                    View Proof
                  </button>
                  <button
                    className="text-white focus:outline-none"
                    onClick={(event) => {event.preventDefault();handleApproveTranscript(transcript._id, transcript.user_id);}}
                  >
                    Approve
                  </button>
                  <button
                    className="text-white focus:outline-none"
                    onClick={(event) => {event.preventDefault();handleRejectTranscript(transcript._id, transcript.user_id);}}
                  >
                    Reject
                  </button>
                  <button
                    className="text-white focus:outline-none"
                    onClick={(event) => {event.preventDefault();handleReadMoreClick(transcript.slug);}}
                  >
                    Read More
                  </button>
                </div>
              </Link>
            ))}
          </div>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85 z-50">
              <div className="relative max-w-full max-h-full">
                <button className="text-white" onClick={() => setShowModal(false)}>Close</button>
                <img src={imageUrl} alt="Uploaded image" className="w-[80vw] h-[85vh]" />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default index

// export async function getServerSideProps(context){
//   const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_status`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       status: "pending"
//     }),
//   });
//   let transcripts = [];
//   console.log("response++", response);
//   if(response.status==200){
//     transcripts = await response.json();
//   }
//   console.log("transcripts++", transcripts);
//   return{
//     props:{transcripts: transcripts}
//   }
// }