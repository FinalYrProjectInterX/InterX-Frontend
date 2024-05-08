import { React, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import CategorySubmitForm from "@/components/CategorySubmitForm";
import QAForm from "@/components/QAForm";
import { useRouter } from "next/router";
import AdditionalInfo from "@/components/AdditionalInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

const contribute = ({ user, logout }) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/signup");
    } else {
      settoken(JSON.parse(localStorage.getItem("token")));
    }
  }, []);

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
  const [ImageProofDisplay, setImageProofDisplay] = useState("none");
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
  const [categorySlug, setcategoryslug] = useState("");
  const [urlSlug, seturlSlug] = useState("");
  const [interviewMode, setinterviewMode] = useState('');
  const [otherInfo, setotherInfo] = useState('');
  const categoryAdditionalFields = {
    UPSC: ['Optional Subject', 'Gap Years', 'Marks', 'Year of Interview'],
    MBA: ['Specialization', 'Work Experience', 'CAT/GMAT Score','Year of Admission'],
    VISA: ['VISA Type', 'Country Applied for VISA', 'Purpose of Travel','Year of Interview'],
    'Coding & Technical': ['Programming Languages', 'Tech Stack Used', 'Work Experience' ,'Year of Interview'],
    'Indian Armed Forces': ['Service Name', 'Branch', 'Commission Type','Year of Interview'],
    'Bank PO': ['Bank Name', 'Work Experience', 'Year of Interview'],
  };
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

  const onSubmitCategory = (
    clearedInterview,
    category,
    subCategory,
    categorySlug,
    urlSlug,
    additionalFields,
    interviewMode,
    otherInfo
  ) => {
    console.log("clearedInterview", clearedInterview);
    console.log("category", category);
    console.log("subCategory", subCategory);
    console.log("additionalFields", additionalFields);
    if(clearedInterview=="" || category=="" || interviewMode=="" || otherInfo==""){
      toast.error("Values for all fields are required, Please fill them!!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const requiredFields = categoryAdditionalFields[category] || [];
    const missingFields = requiredFields.filter(field => !additionalFields[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill out all required fields for ${category} category: ${missingFields.join(', ')}`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setcategoryslug(categorySlug);
    seturlSlug(urlSlug);
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
    setotherInfo(otherInfo);
    setinterviewMode(interviewMode);
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
    setImageProofDisplay("none");
  };

  const onSubmitAdditionalInfo = async (experience, tips, additionalInfo) => {
    console.log("tips++", tips);
    console.log("additionalInfo++", additionalInfo);
    console.log("experience++", experience);
    console.log("urlSlug+++", urlSlug);
    settips(tips);
    setadditionalInfo(additionalInfo);
    setexperience(experience);
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("none");
    setAdditionalInfoDisplay("none");
    setImageProofDisplay("block");
  };

  const [file, setFile] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      console.log(formData);
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload`, {
        method: 'POST',
        ContentType:"multipart/form-data",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded:', data.image);
        console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
        const response2 = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/create_transcript`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: token,
            interview_name: clearedInterview,
            category: category,
            subCategory: subCategory,
            optional_subject: optionalSubject?optionalSubject:"",
            gap_years: gapYears?gapYears:"",
            year_of_interview: InterviewYear?InterviewYear:(admissionYear?admissionYear:""),
            specialization: specialization?specialization:"",
            work_experience: workExperience?workExperience:"",
            exam_scores: catScore?catScore:(marks?marks:""),
            visa_type: visaType?visaType:"",
            country_applied_for_visa: appliedCountryForVisa?appliedCountryForVisa:"",
            purpose_of_travel: purposeOfTravel?purposeOfTravel:"",
            programming_languages: programmingLanguages?programmingLanguages:"",
            tech_stack_used: techStackUsed?techStackUsed:"",
            branch: branch?branch:"",
            commision_type: commissionType?commissionType:"",
            bank_name: bankName?bankName:"",
            interview_experience: experience?experience:"",
            interview_tips: tips?tips:"",
            additional_info: additionalInfo?additionalInfo:"",
            other_profile_info: otherInfo?otherInfo:"",
            interview_mode: interviewMode?interviewMode:"",
            rating: 0,
            category_slug: categorySlug?categorySlug:"",
            slug: urlSlug?urlSlug:"",
            service_name: serviceName?serviceName:"",
            status: "Pending",
            image_proof: data.image.filename,
            questions_answers: quesans
          })
        });
        console.log("response2+++", response2);
        const JSONdata = await response2.json();
        console.log("JSONdata+++", JSONdata);
        if (response2.status==200) {
          toast.success("Transcript Created Successfully!!", {
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
      } else {
        // toast.error("Image upload failed!!", {
        //   position: "top-left",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        console.log(process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST);
        const response2 = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/transcripts/create_transcript`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: token,
            interview_name: clearedInterview,
            category: category,
            subCategory: subCategory,
            optional_subject: optionalSubject?optionalSubject:"",
            gap_years: gapYears?gapYears:"",
            year_of_interview: InterviewYear?InterviewYear:(admissionYear?admissionYear:""),
            specialization: specialization?specialization:"",
            work_experience: workExperience?workExperience:"",
            exam_scores: catScore?catScore:(marks?marks:""),
            visa_type: visaType?visaType:"",
            country_applied_for_visa: appliedCountryForVisa?appliedCountryForVisa:"",
            purpose_of_travel: purposeOfTravel?purposeOfTravel:"",
            programming_languages: programmingLanguages?programmingLanguages:"",
            tech_stack_used: techStackUsed?techStackUsed:"",
            branch: branch?branch:"",
            commision_type: commissionType?commissionType:"",
            bank_name: bankName?bankName:"",
            interview_experience: experience?experience:"",
            interview_tips: tips?tips:"",
            additional_info: additionalInfo?additionalInfo:"",
            other_profile_info: otherInfo?otherInfo:"",
            interview_mode: interviewMode?interviewMode:"",
            rating: 0,
            category_slug: categorySlug?categorySlug:"",
            slug: urlSlug?urlSlug:"",
            service_name: serviceName?serviceName:"",
            status: "Pending",
            image_proof: "",
            questions_answers: quesans
          })
        });
        console.log("response2+++", response2);
        const JSONdata = await response2.json();
        console.log("JSONdata+++", JSONdata);
        if (response2.status==200) {
          toast.success("Transcript Created Successfully!!", {
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
      setcategorySubmitFormDisplay("none");
      setQAFormDisplay("none");
      setAdditionalInfoDisplay("none");
      setImageProofDisplay("block");
    }
    else{
      toast.error("Please Submit the Proof first!!", {
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
  };

  const handleBackFromQA = () => {
    setcategorySubmitFormDisplay("block");
    setQAFormDisplay("none");
    setAdditionalInfoDisplay("none");
    setImageProofDisplay("none");
  }

  const handleBackFromExperience = () => {
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("block");
    setAdditionalInfoDisplay("none");
    setImageProofDisplay("none");
  }

  return (
    <>
    <div className="h-auto">
      <ToastContainer />
      <Navbar user={user} logout={logout} />
      <div className="flex flex-col items-center justify-center my-12 mx-40">
        <p className="text-4xl my-2">
          Thanks for adding value to millions of interviewees!!
        </p>
        <p className="text-xl my-2 text-center">
        Fill out the details of your profile at the time of the interview for other aspirants to filter out this transcripts very easily
        </p>
      </div>
      <div className="" style={{ display: categorySubmitFormDisplay }}>
        <CategorySubmitForm onSubmitCategory={onSubmitCategory} />
      </div>
      <div className="" style={{ display: QAFormDisplay }}>
        <QAForm onSubmit={onSubmit} handleBackFromQA={handleBackFromQA}/>
      </div>
      <div className="" style={{ display: AdditionalInfoDisplay }}>
        <AdditionalInfo onSubmitAdditionalInfo={onSubmitAdditionalInfo} handleBackFromExperience={handleBackFromExperience}/>
      </div>
      <div className="" style={{ display: ImageProofDisplay }}>
      <div className=" flex flex-col items-center justify-center">
        <div className="mb-4 mt-8  text-white w-1/2 ">
          <label className="block text-xl font-medium text-white dark:text-gray-300 mb-2">
            Upload Proof of Interview(Email ScreenShot/ Call Letter)
          </label>
          <input type="file" name="fileupload" onChange={handleFileChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
          <button
            className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {/* {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85 z-50">
          <div className="relative max-w-full max-h-full">
            <button className="text-white" onClick={() => setShowModal(false)}>Close</button>
            <img src={imageUrl} alt="Uploaded image" className="w-[80vw] h-[85vh]" />
          </div>
        </div>
      )} */}
    </div>

    <div className="mt-32">
      <Footer/>
    </div>
    </>
  );
};

export default contribute;
