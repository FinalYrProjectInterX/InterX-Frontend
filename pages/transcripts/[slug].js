import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import indexStyle from "../../styles/index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";
import mongoose from "mongoose";
import InterviewTranscript from "@/models/InterviewTranscript";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { MongoClient } from 'mongodb';

const Transcripts = ({ user, logout }) => {
  // console.log(transcripts);
  const router = useRouter();
  const { slug } = router.query;
  const [additionalFields, setadditionalFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transcripts, setTranscripts] = useState([]);
  const [filteredTranscripts, setFilteredTranscripts] = useState([]);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [searchTerm, setSearchTerm] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_category_slug`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category_slug: router.query.slug,
          }),
        }
      );
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
  }, [router.query.slug]);

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

  const handleReadMoreClick = (transcriptSlug) => {
    router.push(`/transcript/${transcriptSlug}`);
  };

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

  const handleLikeClick = async(id) => {
    setLoading(true);
    setIsHeartFilled(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/like/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status == 200) {
      // toast.success("Success!!", {
      //   position: "top-left",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      console.log('rating improved successfully!!');
    }
    else{
      toast.error("Some Error Occured!!", {
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
    setLoading(false);
  }

  return (
    <div className="min-h-screen">
      <ToastContainer />
      <Navbar user={user} logout={logout} />
      <div className="flex flex-col items-center justify-center my-12 mx-40">
        <p className="text-4xl my-2">
          Browse the Interview Scripts of Specific Category and give it a read!!
        </p>
        <p className="text-lg sm:text-xl my-2">
          Discover firsthand experiences from successful candidates and gain
          insights into the interview process.
          <br></br>
          Navigate through a variety of categories to find transcripts tailored
          to your specific needs.
        </p>
      </div>
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

      <div className="flex mx-20 my-10 justify-center">
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        <div className="grid grid-cols-3 gap-8 mx-20 w-full">
          {filteredTranscripts.map((transcript) => (
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
                  <span className="w-1/2">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="mr-2"
                      size="xl"
                      style={{ color: "black" }}
                    />
                  </span>
                  <span className="w-2/5">{transcript.user_name}</span>
                </dd>
                {additionalFields.map((item) => (
                  <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">{item.name}</span>
                    <span className="w-2/5 text-white ">
                      {transcript[item.apiname] ? transcript[item.apiname] : ""}
                    </span>
                  </dd>
                ))}
                <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                    <span className="w-1/2 text-black">Rating</span>
                    <span className="w-2/5 text-white ">{transcript.rating}</span>
                  </dd>
              </div>
              <div className="flex justify-center mt-6 w-full">
                <button
                  className="text-white focus:outline-none w-full"
                  onClick={() => handleReadMoreClick(transcript.slug)}
                >
                  Read More
                </button>
                <span className="relative right-0">
                  <FontAwesomeIcon icon={faHeart} className="relative right-0" style={{ color: isHeartFilled ? 'red' : 'white'}} onClick={(event)=>{event.preventDefault();handleLikeClick(transcript._id); transcript.rating=transcript.rating+1}} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Transcripts;

// export async function getServerSideProps(context) {
//   console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
//   const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_category_slug`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       category_slug: context.query.slug
//     }),
//   });
//   let transcripts = [];
//   if (response.status == 200) {
//     transcripts = await response.json();
//   }
//   return{
//     props:{transcripts: transcripts}
//   }
// }
