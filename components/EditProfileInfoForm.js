import {React, useState, useEffect} from 'react'
import Link from 'next/link';

const EditProfileInfoForm = ({editForm}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  // const [degree, setdegree] = useState('');
  // const[about, setabout] = useState('');
  const[password, setpassword] = useState('');
  // const Degrees = ["B.Tech.", "B.Com.", "BCA", "BSC", "M.Tech.", "MBA"];

  const handleNameChange = (event) => {
    setname(event.target.value);
  };
  // const handleContactChange = (event) => {
  //   setcontact(event.target.value);
  // };
  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };
  // const handleDegreeChange = (event) => {
  //   setdegree(event.target.value);
  // };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  // const handleAboutChange = (event) => {
  //   setabout(event.target.value);
  // };
  const handleSubmit = (event) =>{
    console.log(name, email, password);
    onSubmitPersonalInfo(name, email, password);
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mb-4 text-black w-full">
				<label for="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Name</label>
				<input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jen bazos" onChange={handleNameChange} disabled={!editForm} required />
			</div>
      <div className="mb-4 text-black w-full">
				<label for="email" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Email</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handleEmailChange} disabled={!editForm} required />
			</div>
      {editForm ? (
      <div className="mb-4 text-black w-full">
				<label for="password" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Password</label>
				<input type="text" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter New Password" onChange={handlePasswordChange} disabled={!editForm} required />
			</div>
      ) : null}
      {editForm ? (
        <button
          className="my-6 block w-full select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleSubmit}
          type="button"
          data-ripple-light="true"
        >
          Continue
        </button>
      ) : null}
    </div>
  )
}

export default EditProfileInfoForm
