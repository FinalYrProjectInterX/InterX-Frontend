import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const detailPage = ({ user, logout }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug++", slug);

  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState([]);

  useEffect(()=>{
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcript_by_url_slug`,
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
      console.log("response+++", response);
      let t = {};
      if (response.status == 200) {
        t = await response.json();
        setTranscript(t);
      }
      setLoading(false);
    };

    fetchData();
    
    
  }, [router.query.slug])

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div className=" min-h-screen">
        <Navbar user={user} logout={logout} />
        <div className={`w-[80%]  m-auto mt-20 mb-20 ${styles.transcript}`}>
          <div className="flex flex-col text-center justify-center p-4">
            <div className="font-bold  text-2xl py-2">
              {transcript.interview_name}
            </div>

            <div className={`grid grid-cols-4 gap-4  ${styles.container}`}>
              <div>{transcript.user_name}</div>
              <div>{transcript.work_experience} yrs Experience</div>
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
            {transcript.questions_answers && transcript.questions_answers.map((qa, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center p-4  text-black ${styles.block}`}
              >
                <p className="text-xl font-bold py-2">Question {index + 1}</p>
                <p className="text-lg">{qa.Question}</p>
                <p className="text-xl font-bold py-2">Answer</p>
                <p className="text-lg">{qa.Answer}</p>
              </div>
            ))}
          </div>

          <hr className="w-[100%] border-solid border-1 border-white my-8" />
          <div
            className={`flex flex-col items-start justify-center p-4  text-black  ${styles.block}`}
          >
            <p className="text-xl font-bold py-2">My Experience</p>
            <p className="text-lg">{transcript.interview_experience}</p>
          </div>
          <hr className="w-[100%] border-solid border-1 border-white  my-8" />
          <div
            className={`flex flex-col items-start justify-center p-4 text-black  ${styles.block}`}
          >
            <p className="text-xl font-bold py-2">Tips & Suggestions</p>
            <p className="text-lg">{transcript.interview_tips}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
    
  );
};

export default detailPage;

// export async function getServerSideProps(context) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcript_by_url_slug`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         category_slug: context.query.slug,
//       }),
//     }
//   );
//   console.log("response+++", response);
//   let transcript = {};
//   if (response.status == 200) {
//     transcript = await response.json();
//   }
//   console.log("transcript+++", transcript);
//   return {
//     props: { transcript: transcript },
//   };
// }
