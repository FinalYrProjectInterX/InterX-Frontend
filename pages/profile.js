import EditProfileInfoForm from '@/components/EditProfileInfoForm'
import Navbar from '@/components/Navbar'
import React, {useState, useEffect} from 'react'

const profile = ({user, logout}) => {
  const [editForm, seteditForm] = useState(false);
  
  const handleEditClick = (event) => {
    event.preventDefault();
    seteditForm(!editForm);
  }

  return (
    <div>
      <Navbar user={user} logout={logout}/>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        {/* <p className="text-4xl my-2">Profile Info : </p> */}
        <button onClick={handleEditClick}>Want to Edit?</button>
      </div>
      <div className="w-[80%] m-auto">
        <EditProfileInfoForm editForm={editForm}/>
      </div>
      <div className="flex flex-row items-start justify-between w-[80%] m-auto my-8">
        <p className="text-4xl my-2">Transcripts</p>
      </div>
    </div>
  )
}

export default profile
