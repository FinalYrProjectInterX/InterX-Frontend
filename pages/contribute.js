import {React, useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import PersonalInfoForm from '@/components/PersonalInfoForm'
import CategorySubmitForm from '@/components/CategorySubmitForm'
import QAForm from '@/components/QAForm'

const contribute = ({user, logout}) => {
  const [name, setname] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [degree, setdegree] = useState('');
  const [category, setcategory] = useState('');
  const [clearedInterview, setclearedInterview] = useState('');
  const [quesans, setquesans] = useState([]);
  const [personalFormDisplay, setpersonalFormDisplay] = useState("block");
  const [categorySubmitFormDisplay, setcategorySubmitFormDisplay] = useState("none");
  const [QAFormDisplay, setQAFormDisplay] = useState("none");

  const onSubmitPersonalInfo = (name, contact, email, degree) => {
    setname(name);
    setcontact(contact);
    setemail(email);
    setdegree(degree);
    console.log("name", name);
    console.log("contact", contact);
    console.log("email", email);
    console.log("degree", degree);
    setpersonalFormDisplay("none");
    setcategorySubmitFormDisplay("block");
    setQAFormDisplay("none");
  }

  const onSubmitCategory = (clearedInterview, category) => {
    setclearedInterview(clearedInterview);
    setcategory(category);
    console.log("clearedInterview", clearedInterview);
    console.log("category", category);
    setpersonalFormDisplay("none");
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("block");
  }

  const onSubmit = (quesans) => {
    setquesans(quesans);
    console.log('quesans', quesans);
    setpersonalFormDisplay("none");
    setcategorySubmitFormDisplay("none");
    setQAFormDisplay("block");
  }

  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar user={user} logout={logout}/>
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        <p className="text-4xl my-2">Thanks for Giving your time to Share your interview experience with us!!</p>
        <p className='text-xl my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, nostrum! Minima veritatis velit asperiores fugit provident, dolore rerum quam, commodi cum saepe possimus id incidunt laborum. Quas, enim? Rem obcaecati in eos.</p>
      </div>
      <div className="" style={{display:personalFormDisplay}}>
        <PersonalInfoForm onSubmitPersonalInfo={onSubmitPersonalInfo}/>
      </div>
      <div className="" style={{display:categorySubmitFormDisplay}}>
        <CategorySubmitForm onSubmitCategory={onSubmitCategory}/>
      </div>
      <div className="" style={{display:QAFormDisplay}}>
        <QAForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default contribute
