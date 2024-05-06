import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import indexStyle from "../../styles/index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/SearchBar";
import Footer from "@/components/Footer";
import mongoose from "mongoose";
import InterviewTranscript from "@/models/InterviewTranscript";
// import { MongoClient } from 'mongodb';

const Transcripts = ({ user, logout, transcripts }) => {
  // console.log(transcripts);
  const router = useRouter();
  const { slug } = router.query;
  const [additionalFields, setadditionalFields] = useState([]);

  useEffect(()=>{
    if(transcripts.length>0){
      const category = transcripts[0].category;
      console.log('category++', category);
      setadditionalFields(categoryAdditionalFields[category]);
      // console.log('additionalFields++', additionalFields);
    }
  }, [])

  const categoryAdditionalFields = {
    'UPSC': [
      {name: 'Optional Subject',apiname:'optional_subject'},
      {name: 'Gap Years',apiname:'gap_years'},
      {name: 'Marks',apiname:'exam_scores'},
      {name: 'Year of Interview',apiname:'year_of_interview'}
    ],
    'MBA': [
      {name: 'Specialization',apiname:'specialization'},
      {name: 'Work Experience',apiname:'work_experience'},
      {name: 'CAT/GMAT Score',apiname:'exam_scores'},
      {name: 'Year of Admission',apiname:'year_of_interview'}
    ],
    'VISA': [
      {name: 'VISA Type',apiname:'visa_type'},
      {name: 'Country Applied for VISA',apiname:'country_applied_for_visa'},
      {name: 'Purpose of Travel',apiname:'purpose_of_travel'},
      {name: 'Year of Interview',apiname:'year_of_interview'}
    ],
    'Coding & Technical': [
      {name: 'Programming Languages',apiname:'programming_languages'},
      {name: 'Tech Stack Used',apiname:'tech_stack_used'},
      {name: 'Work Experience',apiname:'work_experience'},
      {name: 'Year of Interview',apiname:'year_of_interview'}
    ],
    'Indian Armed Forces': [
      {name: 'Service Name',apiname:'service_name'},
      {name: 'Branch',apiname:'branch'},
      {name: 'Commission Type',apiname:'commision_type'},
      {name: 'Year of Interview',apiname:'year_of_interview'}
    ],
    'Bank PO': [
      {name: 'Bank Name',apiname:'bankName'},
      {name: 'Work Experience',apiname:'work_experience'},
      {name: 'Year of Interview',apiname:'year_of_interview'}
    ]
  };

  const handleReadMoreClick = (transcriptSlug) => {
    router.push(`/transcript/${transcriptSlug}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar user={user} logout={logout} />
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        <p className="text-4xl my-2">
          Browse the Interview Scripts of Specific Category and give it a read!!
        </p>
        <p className="text-xl my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          nostrum! Minima veritatis velit asperiores fugit provident, dolore
          rerum quam, commodi cum saepe possimus id incidunt laborum. Quas,
          enim? Rem obcaecati in eos.
        </p>
        <div className="container mx-auto p-4">
          <SearchBar placeholder="Search..." />
        </div>
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
      <Footer />
    </div>
  );
};

export default Transcripts;

export async function getServerSideProps(context){
  console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
  const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_category_slug`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category_slug: context.query.slug
    }),
  });
  let transcripts = [];
  if(response.status==200){
    transcripts = await response.json();
  }
  // const client = new MongoClient(process.env.MONGODB_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  // await client.connect();
  // const db = client.db('Interx');
  // // console.log(db);
  // const collection = db.collection('transcripts');
  // // console.log(collection);
  // const query = { category_slug: context.query.slug };
  // const transcripts = await collection.find(query).toArray();
  // // console.log(transcripts);
  // await client.close();
  return{
    props:{transcripts: transcripts}
  }
}
