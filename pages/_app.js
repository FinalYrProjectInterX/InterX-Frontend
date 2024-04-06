import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [user,setuser] = useState({value:null});

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setuser({value:token});
    }
  }, [])

  const logout=async()=>{
    setuser({value:null});
    localStorage.removeItem('token');
  }

  return <Component user={user} logout={logout} {...pageProps} />;
}