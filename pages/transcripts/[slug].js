import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import indexStyle from "../../styles/index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";
import mongoose from "mongoose";
import InterviewTranscript from "@/models/InterviewTranscript";

const Transcripts = ({ user, logout, transcripts }) => {
  console.log(transcripts);
  const router = useRouter();
  const { slug } = router.query;
  // console.log("question", transcripts[2].questions_answers[0].Question);
  // console.log("answer", transcripts[2].questions_answers[0].Answer);
  // console.log("slug", slug);
  const handleReadMoreClick = (transcriptSlug) => {
    router.push(`/transcript/${transcriptSlug}`);
  };

  const [searchTerm, setSearchTerm] = useState({
    ExamName: "",
    optionalSubject: "",
    work_experience: "",
    gapYear: "",
    yearOfInterview: "",
  });

  const [filteredTranscripts, setFilteredTranscripts] = useState(transcripts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = transcripts.filter((transcript) => {
      const matchExamName = searchTerm.ExamName
        ? transcript.interview_name
            .toLowerCase()
            .includes(searchTerm.ExamName.toLowerCase())
        : true;
      const matchGapYear =
        searchTerm.gapYear !== ""
          ? transcript.gap_years === Number(searchTerm.gapYear)
          : true;
      const matchYearOfInterview =
        searchTerm.yearOfInterview !== ""
          ? transcript.year_of_interview === Number(searchTerm.yearOfInterview)
          : true;
      const matchOptionalSubject =
        searchTerm.optionalSubject !== ""
          ? transcript.optional_subject === searchTerm.optionalSubject
          : true;
      const matchWorkExperience =
        searchTerm.work_experience !== ""
          ? transcript.work_experience === Number(searchTerm.work_experience)
          : true;
      return (
        matchExamName &&
        matchGapYear &&
        matchYearOfInterview &&
        matchOptionalSubject &&
        matchWorkExperience
      );
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center justify-center mt-4 text-black "
        >
          <div className="flex items-center w-full bg-gray-100 py-4 px-6 mb-4 rounded-lg">
            <input
              type="text"
              name="ExamName"
              value={searchTerm.ExamName}
              onChange={handleChange}
              className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
              placeholder="Exam Name"
            />

            <input
              type="text"
              name="optionalSubject"
              value={searchTerm.optionalSubject}
              onChange={handleChange}
              className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
              placeholder="optionalSubject"
            />
            <input
              type="text"
              name="work_experience"
              value={searchTerm.work_experience}
              onChange={handleChange}
              className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
              placeholder="work_experience"
            />

            <input
              type="text"
              name="gapYear"
              value={searchTerm.gapYear}
              onChange={handleChange}
              className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
              placeholder="Gap Year"
            />

            <input
              type="text"
              name="yearOfInterview"
              value={searchTerm.yearOfInterview}
              onChange={handleChange}
              className="flex-grow border border-gray-300 focus:outline-none py-2 px-4 mr-2 rounded"
              placeholder="yearOfInterview"
            />
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Search
            </button>
          </div>
        </form>

        {/* <SearchBar placeholder="Search..." /> */}
      </div>
      <div className="flex mx-20 my-10 justify-center">
        <div className="grid grid-cols-3 gap-8 mx-20 my-20">
          {filteredTranscripts.map((transcript) => (
            <Link
              key={transcript._id}
              href={`/transcript/${transcript.slug}`}
              className={`flex flex-col items-center ${indexStyle.blockstyle}`}
            >
              <dt className="mt-4 font-semibold text-2xl text-center ">
                {transcript.interview_name}
              </dt>
              <div className="justify-start">
                <dd className="mt-2  font-semibold text-xl ">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="mr-2 "
                    size="lg"
                    style={{ color: "black" }}
                  />
                  {transcript.user_id}
                </dd>
                <dd className="mt-2 leading-7  text-white">
                  <span>Year:</span>
                  <span>{transcript.year_of_interview}</span>
                </dd>
                <dd className="mt-2 leading-7  text-white">
                  {transcript.questions_answers &&
                  transcript.questions_answers.length > 0 ? (
                    <div className="">
                      <strong>Question:</strong>{" "}
                      <span>{transcript.questions_answers[0].Question}</span>
                    </div>
                  ) : (
                    <div className="">
                      <strong>Question:</strong> No questions available
                    </div>
                  )}
                </dd>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-white focus:outline-none  "
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

export async function getServerSideProps(context) {
  console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/get_transcripts_by_category_slug`,
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
  // console.log("response+++", response);
  let transcripts = [];
  if (response.status == 200) {
    transcripts = await response.json();
  }
  // console.log("transcripts+++", transcripts);
  return {
    props: { transcripts: transcripts },
  };
}
