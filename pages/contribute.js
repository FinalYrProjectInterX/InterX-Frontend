import { React, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import CategorySubmitForm from "@/components/CategorySubmitForm";
import QAForm from "@/components/QAForm";
import { useRouter } from "next/router";
import AdditionalInfo from "@/components/AdditionalInfo";

const contribute = ({ user, logout }) => {
  const router = useRouter();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/signup');
    }
    else{
      settoken(JSON.parse(localStorage.getItem('token')));
    }
  },[])

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
  const [specialization, setspecialization] = useState("");
  const [workExperience, setworkExperience] = useState("");
  const [catScore, setcatScore] = useState("");
  const [admissionYear, setadmissionYear] = useState("");
  const [visaType, setvisaType] = useState("");
  const [appliedCountryForVisa, setappliedCountryForVisa] = useState("");
  const [purposeOfTravel, setpurposeOfTravel] = useState("");
  const [programmingLanguages, setprogrammingLanguages] = useState([]);
  const [techStackUsed, settechStackUsed] = useState([]);
  const [serviceName, setserviceName] = useState("");
  const [branch, setbranch] = useState("");
  const [commissionType, setcomissionType] = useState("");
  const [bankName, setbankName] = useState("");
  const [token, settoken] = useState("");

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
    setadmissionYear(additionalFields["Year of Admission"]);
    setspecialization(additionalFields["Specialization"]);
    setworkExperience(additionalFields["Work Experience"]);
    setcatScore(additionalFields["CAT/GMAT Score"]);
    setvisaType(additionalFields["VISA Type"]);
    setappliedCountryForVisa(additionalFields["Country Applied for VISA"]);
    setpurposeOfTravel(additionalFields["Purpose of Travel"]);
    setprogrammingLanguages(additionalFields["Programming Languages"]);
    settechStackUsed(additionalFields["Tech Stack Used"]);
    setserviceName(additionalFields["Service Name"]);
    setbranch(additionalFields["Branch"]);
    setcomissionType(additionalFields["Commission Type"]);
    setbankName(additionalFields["Bank Name"]);
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token,
        interview_name: clearedInterview,
        category: category,
        subCategory: subCategory,
        optional_subject: "optionalSubject",
        gap_years: "gapYears",
        year_of_interview: "InterviewYear",
        specialization: "specialization",
        work_experience: "workExperience",
        exam_scores: "catScore",
        visa_type: "visaType",
        country_applied_for_visa: "appliedCountryForVisa",
        purpose_of_travel: "purposeOfTravel",
        programming_languages: "programmingLanguages",
        tech_stack_used: "techStackUsed",
        branch: "branch",
        commision_type: "commissionType",
        bank_name: "bankName",
        interview_experience: "experience",
        interview_tips: "tips",
        additional_info: "additionalInfo",
        rating: 0,
        category_slug: "",
        slug: "",
        questions_answers: []
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