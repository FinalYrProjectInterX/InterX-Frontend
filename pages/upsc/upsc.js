import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import indexStyle from '../../styles/index.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const read = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar/>
      <div className="flex flex-col items-start justify-center my-12 mx-40">
        <p className="text-4xl my-2">Browse the Interview Scripts of Specific Category and give it a read!!</p>
        <p className='text-xl my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, nostrum! Minima veritatis velit asperiores fugit provident, dolore rerum quam, commodi cum saepe possimus id incidunt laborum. Quas, enim? Rem obcaecati in eos.</p>
      </div>
      <div className="flex mx-20 my-20">
        <Link href="/ias" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IAS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="/ips" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IPS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="/irs" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IRS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
        <Link href="/ifs" className={`flex flex-col items-center w-[30%] mx-8 ${indexStyle.blockstyle}`}>
          <dt className="mt-4 font-semibold text-3xl">IFS</dt>
          <dd className="mt-2 leading-7 text-center text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</dd>
          <FontAwesomeIcon icon={faArrowRight} className='mt-4'/>
        </Link>
      </div>
    </div>
  )
}

export default read