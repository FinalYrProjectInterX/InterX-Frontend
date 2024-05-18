import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = ({user, logout}) => {
  const router=useRouter();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 
  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.back();
    }
  }, []);

  const handleEmailChange = (event) => {
    event.preventDefault();
    setemail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setpassword(event.target.value);
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Login Successfully.");
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    if (response.status==200) {
      localStorage.setItem('token', JSON.stringify(JSONdata.authToken));
      user.value = JSONdata.authToken;
      router.back();
    }
    else{
      toast.error("Invalid credentials", {
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
    <div className="min-h-screen">
      <ToastContainer />
      <Navbar user={user} logout={logout}/>
      <div className='flex flex-col items-center justify-center h-[85vh]'>
        <div className="mb-4 text-black w-1/2">
          <label for="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Email</label>
          <input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jen bazos" onChange={handleEmailChange} required />
        </div>
        <div className="mb-4 text-black w-1/2 relative">
          <label htmlFor="password" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            onChange={handlePasswordChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-[2.15rem] text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? '🙈' : '👁️'}
          </button>
        </div>
        <button
          className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleSubmit}
          type="button"
          data-ripple-light="true"
        >
          Login
        </button>
        <div className="">
          <p>Don't Have an Account ? <Link href="/signup" className=''>SignUp</Link></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default login
