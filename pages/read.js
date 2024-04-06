import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import indexStyle from '../styles/index.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import jsonData from '../JsonData/categories.json';

const CategoryBlock = ({item}) => {
  return (
    <Link href="" className={`flex flex-col items-center ${indexStyle.blockstyle}`}>
      <dt className="mt-4 font-semibold text-3xl">{item.name}</dt>
      <dd className="mt-2 leading-7 text-center text-gray-400">{item.description}</dd>
      <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
    </Link>
  )
}

const read = ({user, logout}) => {
  const [categories, setcategories] = useState([]);
  useEffect(()=>{
    setcategories(jsonData);
    console.log("jsonData", jsonData);
  }, [])
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar user={user} logout={logout}/>
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        <p className="text-4xl my-2">Browse the Interview Scripts of Specific Category and give it a read!!</p>
        <p className='text-xl my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, nostrum! Minima veritatis velit asperiores fugit provident, dolore rerum quam, commodi cum saepe possimus id incidunt laborum. Quas, enim? Rem obcaecati in eos.</p>
      </div>
      <div className="flex mx-20 my-20">
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IAS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ut ipsum dolor ex ipsa natus, pariatur nemo iure minus, unde laborum similique exercitationem earum reprehenderit dolorem vero laboriosam ab temporibus obcaecati. Nostrum!</dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IAS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ut ipsum dolor ex ipsa natus, pariatur nemo iure minus, unde laborum similique exercitationem earum reprehenderit dolorem vero laboriosam ab temporibus obcaecati. Nostrum!</dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IAS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ut ipsum dolor ex ipsa natus, pariatur nemo iure minus, unde laborum similique exercitationem earum reprehenderit dolorem vero laboriosam ab temporibus obcaecati. Nostrum!</dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
      </div>
    </div>
  )
}

export default read
