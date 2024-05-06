import {React, useState, useEffect} from 'react'
import Link from 'next/link';

const EditProfileInfoForm = ({editForm, editpasswordform, name, email, about, handleNameChange, handleAboutChange, handlePasswordChange, onSubmitPersonalInfo}) => {

  const handleEditNameChange = (event) => {
    handleNameChange(event.target.value);
  };
  const handleEditPasswordChange = (event) => {
    handlePasswordChange(event.target.value);
  };
  const handleEditAboutChange = (event) => {
    handleAboutChange(event.target.value);
  };
  const handleSubmit = (event) =>{
    onSubmitPersonalInfo();
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mb-4 text-black w-full">
				<label for="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Name</label>
				<input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={name} onChange={handleEditNameChange} disabled={!editForm} required />
			</div>
      <div className="mb-4 text-black w-full">
				<label for="email" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Email</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={email} disabled={true} required />
			</div>
      <div className="mb-4 text-black w-full">
				<label for="about" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">About</label>
				<input type="text" id="about" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={about} onChange={handleEditAboutChange} disabled={!editForm} required />
			</div>
      {editpasswordform ? (
      <div className="mb-4 text-black w-full">
				<label for="password" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Password</label>
				<input type="text" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter New Password" onChange={handleEditPasswordChange} disabled={!editpasswordform} required />
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
