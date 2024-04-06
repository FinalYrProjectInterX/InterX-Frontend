import {React, useState, useEffect} from 'react'
import Link from 'next/link';

const PersonalInfoForm = ({onSubmitPersonalInfo}) => {
  const [name, setname] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [degree, setdegree] = useState('');
  const[about, setabout] = useState('');
  const[password, setpassword] = useState('');
  const Degrees = ["B.Tech.", "B.Com.", "BCA", "BSC", "M.Tech.", "MBA"];

  const handleNameChange = (event) => {
    setdegree(event.target.value);
  };
  const handleContactChange = (event) => {
    setcontact(event.target.value);
  };
  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };
  const handleDegreeChange = (event) => {
    setdegree(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  const handleAboutChange = (event) => {
    setabout(event.target.value);
  };
  const handleSubmit = (event) =>{
    onSubmitPersonalInfo(name, contact, email, degree, about, password);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mb-4 text-black w-1/2">
				<label for="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Name</label>
				<input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jen bazos" onChange={handleNameChange} required />
			</div>
      <div className="mb-4 text-black w-1/2">
				<label for="email" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Email</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handleEmailChange} required />
			</div>
      <div className="mb-4 text-black w-1/2">
				<label for="contact" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Contact</label>
				<input type="text" id="contact" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handleContactChange} required />
			</div>
      <div className="mb-4 mt-8 text-black w-1/2">
				{/* <label for="degree" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Degree</label> */}
				<select className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' value={degree} onChange={handleDegreeChange}>
          <option className='text-bold' value="">Select a Degree</option>
          {Degrees.map(degree => (
            <option key={degree} value={degree}>
              {degree}
            </option>
          ))}
        </select>
			</div>  
      <div className="mb-4 text-black w-1/2">
				<label for="about" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">About</label>
				<textarea type="text" rows={2} id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jen bazos" value={about} onChange={handleAboutChange} required />
			</div>
      <div className="mb-4 text-black w-1/2">
				<label for="password" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Password</label>
				<input type="text" id="contact" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" onChange={handlePasswordChange} required />
			</div>
      <button
        className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleSubmit}
        type="button"
        data-ripple-light="true"
      >
        Continue
      </button>
      <div className="">
        <p>Already have an account? <Link href="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default PersonalInfoForm
