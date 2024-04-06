import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import indexStyle from '../styles/index.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';

const ias= () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar/>
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        
      <div className="container mx-auto p-4">
      <SearchBar placeholder="Search..." />
    </div>

      </div>
      <div className="flex mx-20 my-20">
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">Himani Soni</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">Mitali Lohar</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">Umang Jain</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
      </div>
    </div>
  )
}
 
export default ias
