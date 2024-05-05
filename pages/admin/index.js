import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import { MongoClient } from 'mongodb';
import indexStyle from "../../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/SearchBar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = ({user, logout, transcripts}) => {
  const router = useRouter();
  // console.log('transcripts++', transcripts);
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    if(!localStorage.getItem('admin')){
      router.push('/admin/login');
    }
  },[])

  const handleReadMoreClick = (transcriptSlug) => {
    router.push(`/transcript/${transcriptSlug}`);
  };

  const handleProofView=(image)=>{
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getImage?filename=${image}`)
      .then((response) => response.blob())
      .then((blob) => {
        console.log(blob)
        const imageURL = URL.createObjectURL(blob);
        console.log(imageURL);
        setImageUrl(imageURL);
        setShowModal(true);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }

  const handleApproveTranscript = async(id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/admin/transcripts/approve/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    if (response.status==200) {
      toast.success("Transcript Approved Successfully, Refresh the Page to reflect the changes!!", {
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
      toast.error("Some Error Occured, Contact Admin!!", {
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

  const handleRejectTranscript = async(id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_PUBLIC_HOST}/admin/transcripts/reject/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    if (response.status==200) {
      toast.success("Transcript Rejected Successfully, Refresh the Page to reflect the changes!!", {
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
      toast.error("Some Error Occured, Contact Admin!!", {
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
    <div className="h-auto">
      <ToastContainer />
      <Navbar user={user} logout={logout} />
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        <p className="text-4xl my-2">
          Thanks for Giving your time to Share your interview experience with
          us!!
        </p>
        <p className="text-xl my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          nostrum! Minima veritatis velit asperiores fugit provident, dolore
          rerum quam, commodi cum saepe possimus id incidunt laborum. Quas,
          enim? Rem obcaecati in eos.
        </p>
        <div className="container mx-auto p-4">
          <SearchBar placeholder="Search..." />
        </div>
      </div>
      <div className="flex mx-20 my-10 justify-center">
        <div className="grid grid-cols-3 gap-8 mx-20 my-20 w-full">
          {transcripts.map((transcript) => (
            <Link
              key={transcript._id}
              href={`/transcript/${transcript.slug}`}
              className={`flex flex-col items-center ${indexStyle.blockstyle}`}
            >
              <dt className="mt-4 font-semibold text-2xl text-center mb-4 overflow-hidden h-[5vh]">
                {transcript.interview_name}
              </dt>
              <div className="flex flex-col items-center justify-between w-full">
                <dd className="mt-2 font-semibold text-xl flex flex-row justify-between w-full">
                  <span className="w-1/2"><FontAwesomeIcon
                    icon={faUserTie}
                    className="mr-2"
                    size="xl"
                    style={{ color: "black" }}
                  /></span>
                  <span className="w-2/5">
                  {transcript.user_name}
                  </span>
                </dd>
                <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                  <span className="w-1/2 text-black">Category</span>
                  <span className="w-2/5 text-white ">{transcript['category']?transcript['category']:""}</span>
                </dd>
                <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                  <span className="w-1/2 text-black">Sub-Category</span>
                  <span className="w-2/5 text-white ">{transcript['subCategory']?transcript['subCategory']:""}</span>
                </dd>
                <dd className="mt-2 leading-7 flex flex-row justify-between w-full">
                  <span className="w-1/2 text-black">Year of Interview</span>
                  <span className="w-2/5 text-white ">{transcript['year_of_interview']?transcript['year_of_interview']:""}</span>
                </dd>
              </div>
              <div className="flex flex-row items-center justify-between mt-6 w-full">
                <button
                  className="text-white focus:outline-none"
                  onClick={(event) => {event.preventDefault();handleProofView(transcript.image_proof);}}
                >
                  View Proof
                </button>
                <button
                  className="text-white focus:outline-none"
                  onClick={(event) => {event.preventDefault();handleApproveTranscript(transcript._id);}}
                >
                  Accept
                </button>
                <button
                  className="text-white focus:outline-none"
                  onClick={(event) => {event.preventDefault();handleRejectTranscript(transcript._id);}}
                >
                  Reject
                </button>
                <button
                  className="text-white focus:outline-none"
                  onClick={(event) => {event.preventDefault();handleReadMoreClick(transcript.slug);}}
                >
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </div>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85 z-50">
            <div className="relative max-w-full max-h-full">
              <button className="text-white" onClick={() => setShowModal(false)}>Close</button>
              <img src={imageUrl} alt="Uploaded image" className="w-[80vw] h-[85vh]" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default index

export async function getServerSideProps(context){
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db('Interx');
  const collection = db.collection('transcripts');
  const query = { status: 'Pending' };
  const transcripts = await collection.find(query).toArray();
  await client.close();
  return{
    props:{transcripts: JSON.parse(JSON.stringify(transcripts))}
  }
}