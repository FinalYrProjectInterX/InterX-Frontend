import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'

const index = ({user, logout, transcripts}) => {
  console.log('transcripts++', transcripts);
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/admin/login');
    }
  },[])

  return (
    <div>
      <Navbar user={user} logout={logout} />
    </div>
  )
}

export default index

export async function getServerSideProps(context){
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/transcripts/get_transcripts_by_status`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: 'Pending'
    }),
  });
  let transcripts = [];
  if(response.status==200){
    transcripts = await response.json();
  }
  // console.log("transcripts+++", transcripts);
  return{
    props:{transcripts: transcripts}
  }
}