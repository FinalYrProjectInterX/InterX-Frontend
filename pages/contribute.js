import { React, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import CategorySubmitForm from "@/components/CategorySubmitForm";
import QAForm from "@/components/QAForm";
import { useRouter } from "next/router";
import AdditionalInfo from "@/components/AdditionalInfo";

const contribute = ({ user, logout }) => {
  const router = useRouter();

  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     router.push('/signup');
  //   }
  // },[])

  // const [name, setname] = useState('');
  // const [contact, setcontact] = useState('');
  // const [email, setemail] = useState('');
  // const [degree, setdegree] = useState('');
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [clearedInterview, setclearedInterview] = useState("");
  const [quesans, setquesans] = useState([]);
  const [categorySubmitFormDisplay, setcategorySubmitFormDisplay] =
    useState("block");
  const [QAFormDisplay, setQAFormDisplay] = useState("none");
  const [AdditionalInfoDisplay, setAdditionalInfoDisplay] = useState("none");
  const [tips, settips] = useState("");
  const [experience, setexperience] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");
  const [optionalSubject, setoptionalSubject] = useState("");
  const [gapYears, setgapYears] = useState("");
  const [marks, setmarks] = useState("");
  const [InterviewYear, setInterviewYear] = useState("");

  // const onSubmitPersonalInfo = (name, contact, email, degree) => {
  //   setname(name);
  //   setcontact(contact);
  //   setemail(email);
  //   setdegree(degree);
  //   console.log("name", name);
  //   console.log("contact", contact);
  //   console.log("email", email);
  //   console.log("degree", degree);
  //   setcategorySubmitFormDisplay("block");
  //   setQAFormDisplay("none");
  // }

  const onSubmitCategory = (clearedInterview, category, subCategory, additionalFields) => {
    console.log("clearedInterview", clearedInterview);
    console.log("category", category);
    console.log("subCategory", subCategory);
    console.log("additionalFields", additionalFields);
    setclearedInterview(clearedInterview);
    setcategory(category);
    setsubCategory(subCategory);
    setgapYears(additionalFields["Gap Years"]);
    setmarks(additionalFields["Marks"]);
    setoptionalSubject(additionalFields["Optional Subject"]);
    setInterviewYear(additionalFields["Year of Interview"]);
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("block");
    setAdditionalInfoDisplay("none");
  };

  const onSubmit = (quesans) => {
    setquesans(quesans);
    console.log("quesans", quesans);
    console.log("interviewYear++", InterviewYear);
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("none");
    setAdditionalInfoDisplay("block");
  };

  const onSubmitAdditionalInfo = async(experience, tips, additionalInfo) => {
    console.log("tips++", tips);
    console.log("additionalInfo++", additionalInfo);
    console.log("experience++", experience);
    settips(tips);
    setadditionalInfo(additionalInfo);
    setexperience(experience);
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("none");
    setAdditionalInfoDisplay("block");
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/transcripts/create_transcript`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJleHAiOjE3MTM2Mzg1OTR9.xAY-wF_TPV9DBvyG3qqdkxZhKGHWW7uhr4DXDN0Xt1M`
      },
      body: JSON.stringify({
        interview_name: "Interview Name",
        category: "Category",
        subCategory: "Subcategory",
        optional_subject: "Optional Subject",
        gap_years: "Gap Years",
        year_of_interview: "Year of Interview",
        specialization: "Specialization",
        work_experience: "Work Experience",
        exam_scores: "Exam Scores",
        visa_type: "Visa Type",
        country_applied_for_visa: "Country Applied for Visa",
        purpose_of_travel: "Purpose of Travel",
        programming_languages: ["Language 1", "Language 2"],
        tech_stack_used: ["Tech 1", "Tech 2"],
        problem_solving_approach: "Problem Solving Approach",
        branch: "Branch",
        commision_type: "Commission Type",
        bank_name: "Bank Name",
        selection_process_details: "Selection Process Details",
        interview_experience: "Interview Experience",
        interview_tips: "Interview Tips",
        rating: 4.5,
        category_slug: "category-slug",
        slug: "transcript-slug",
        questions_answers: [{
          "ques": "sujal",
          "ans": "sahu"
        }]
      })
    });
    console.log("response+++", response);
    const JSONdata = await response.json();
    console.log("JSONdata+++", JSONdata);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
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
      </div>
      <div className="" style={{ display: categorySubmitFormDisplay }}>
        <CategorySubmitForm onSubmitCategory={onSubmitCategory} />
      </div>
      <div className="" style={{ display: QAFormDisplay }}>
        <QAForm onSubmit={onSubmit} />
      </div>
      <div className="" style={{ display: AdditionalInfoDisplay }}>
        <AdditionalInfo onSubmitAdditionalInfo={onSubmitAdditionalInfo} />
      </div>
    </div>
  );
};

export default contribute;