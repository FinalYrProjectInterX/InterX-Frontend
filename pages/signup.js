import Navbar from '@/components/Navbar'
import PersonalInfoForm from '@/components/PersonalInfoForm'
import {React, useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const signup = ({user, logout}) => {
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.back();
    }
  },[])

  const handlesignup=async({name, contact, email, degree, about, password})=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
      method:"POST",
      body:JSON.stringify({
        name:name,
        email:email,
        password:password,
        contact:contact,
        about:about,
        degree:degree
      })
    })
    const jsonData = await response.json();
    console.log(jsonData);
    if(jsonData.success){
      localStorage.setItem('token',JSON.stringify(jsonData.authToken));
      router.back();
    }
    else{
      toast.error("Some Error Occured, Please try again...", {
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

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar user={user} logout={logout}/>
      <div className="mt-10 pb-20">
        <PersonalInfoForm onSubmitPersonalInfo={handlesignup}/>
      </div>
    </div>
  )
}

export default signup
