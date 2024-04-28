import Navbar from '@/components/Navbar'
import PersonalInfoForm from '@/components/PersonalInfoForm'
import {React, useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signup = ({user, logout}) => {
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.back();
    }
  },[])

  const handlesignup=async(name, email, password)=>{
    console.log(name, email, password);
    console.log(JSON.stringify({
      name: name,
      email: email,
      about: "",
      password: password
    }));
    const response = await fetch(`${process.env.FASTAPI_PUBLIC_HOST}/signup/`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        about: "",
        password: password
      })
    })
    console.log("response+++", response);
    const jsonData = await response.json();
    console.log("jsonData+++", jsonData);
    console.log(response.status);
    if(response.status==200){
      localStorage.setItem('token',JSON.stringify(jsonData.authToken));
      user.value = jsonData.authToken;
      router.back();
    }
    else if(response.status==400){
      toast.info("User Already Exists, please login....", {
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
      console.log('sujalsahucoming on the way');
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
      <ToastContainer />
      <Navbar user={user} logout={logout}/>
      <div className="pt-32 h-[90vh]">
        <PersonalInfoForm onSubmitPersonalInfo={handlesignup}/>
      </div>
      <Footer/>
    </div>
  )
}

export default signup
