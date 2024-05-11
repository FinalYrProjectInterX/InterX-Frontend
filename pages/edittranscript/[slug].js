import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const editTranscriptPage = ({ user, logout, transcript }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug++", slug);
  console.log("transcript+++", transcript);
  const [questions_answers, setquestions_answers] = useState([]);
  const [interview_experience, setinterview_experience] = useState([]);
  const [tips, settips] = useState([]);
  
  useEffect(()=>{
    setquestions_answers(transcript.questions_answers);
    setinterview_experience(transcript.interview_experience);
    settips(transcript.interview_tips);
  }, [])

  const handleChangeinQuestion = (event, index) => {
    console.log(questions_answers);
    const updatedQuestions = [...questions_answers];
    updatedQuestions[index].Question = event.target.value;
    setquestions_answers(updatedQuestions);
  }

  const handleChangeinAnswer = (event, index) => {
    console.log(questions_answers);
    const updatedQuestions = [...questions_answers];
    updatedQuestions[index].Answer = event.target.value;
    setquestions_answers(updatedQuestions);
  }

  const handleAddQuestion = (event) => {
    event.preventDefault();
    const updatedQuestions = [...questions_answers];
    updatedQuestions.push({Question:"", Answer:""});
    setquestions_answers(updatedQuestions);
  }

  const handleChangeinExperience = (event) => {
    event.preventDefault();
    setinterview_experience(event.target.value);
  }

  const handleChangeinTips = (event) => {
    event.preventDefault();
    settips(event.target.value);
  }

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions_answers];
    updatedQuestions.splice(index, 1);
    setquestions_answers(updatedQuestions);
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    router.push('/profile');
  }

  const handleSaveClick = async(event) => {
    event.preventDefault();
    console.log(transcript._id, interview_experience, tips, questions_answers);
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/update_transcript`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        transcript_id: transcript._id,
        interview_experience: interview_experience,
        interview_tips: tips,
        questions_answers: questions_answers
      })
    });
    let res = await response.json();
    console.log(res);
    if(response.status === 200){
      toast.success("Transcript Updated Successfully!!", {
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
  }

  return (
    <div className=" min-h-screen">
      <ToastContainer />
      <Navbar user={user} logout={logout} />
      <div className={`w-[80%]  m-auto mt-20 mb-20 ${styles.transcript}`}>
        <div className="flex flex-col items-start justify-center p-4">
          <div className="font-bold text-2xl py-2">
            {transcript.interview_name}
          </div>

          <div className={`grid grid-cols-4 gap-4 ${styles.container}`}>
            <div>{transcript.user_name}</div>
            <div>{transcript.work_experience}</div>
            <div>{transcript.year_of_interview}</div>
            <div>{transcript.specialization}</div>
          </div>
        </div>
        <hr className="w-[100%] border-solid border-1 border-white  my-5" />
        <div className="text-center text-lg">
          {transcript.other_profile_info}
        </div>
        <hr className="w-[100%] border-solid border-1 border-white my-5" />
        <div>
          <p className="text-2xl text-center font-bold py-2">
            Interview Transcripts
          </p>
          {questions_answers.length>0 && questions_answers.map((qa, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-center p-4  text-black ${styles.block}`}
            >
              <button className="relative top-0 right-0 w-full text-right" onClick={() => handleRemoveQuestion(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <p className="text-xl font-bold py-2">Question {index + 1}</p>
              {/* <p className="text-lg">{qa.Question}</p> */}
              <input className="w-full text-lg" type="text"  name={`question-${index}`} placeholder="Enter your Question here..." value={qa.Question} onChange={(event)=>{event.preventDefault();handleChangeinQuestion(event, index)}} />
              <p className="text-xl font-bold py-2">Answer</p>
              <textarea type="text" rows={3} id={`answer-${index}`} className="w-full text-lg" placeholder="Your answer to the above question. Leave blank if you don't want to share" value={qa.Answer} onChange={(event)=>{event.preventDefault();handleChangeinAnswer(event, index)}} required />
            </div>
          ))}
          
          <button
            className="my-3 block w-full select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleAddQuestion}
          >
            Add Question
          </button>
        </div>

        <hr className="w-[100%] border-solid border-1 border-white my-8" />
        <div
          className={`flex flex-col items-start justify-center p-4  text-black  ${styles.block}`}
        >
          <p className="text-xl font-bold py-2">My Experience</p>
          {/* <p className="text-lg">{transcript.interview_experience}</p> */}
          <textarea type="text" rows={3} id="experience" className="w-full text-lg" placeholder="Enter your Experience..." value={interview_experience} onChange={handleChangeinExperience} required />
        </div>
        <hr className="w-[100%] border-solid border-1 border-white  my-8" />
        <div
          className={`flex flex-col items-start justify-center p-4 text-black  ${styles.block}`}
        >
          <p className="text-xl font-bold py-2">Tips & Suggestions</p>
          {/* <p className="text-lg">{transcript.interview_tips}</p> */}
          <textarea type="text" rows={3} id="tips" className="w-full text-lg" placeholder="Enter your Tips..." value={tips} onChange={handleChangeinTips} required />
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
              className="my-3 mx-2 block select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleCancelClick}
            >
            Cancel
          </button>
          <button
              className="my-3 mx-2 block select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleSaveClick}
            >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default editTranscriptPage;

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcript_by_url_slug`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category_slug: context.query.slug,
      }),
    }
  );
  console.log("response+++", response);
  let transcript = {};
  if (response.status == 200) {
    transcript = await response.json();
  }
  console.log("transcript+++", transcript);
  return {
    props: { transcript: transcript },
  };
}
