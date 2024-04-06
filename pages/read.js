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
      <div className="grid grid-cols-3 gap-3 mx-20 my-20">
        {categories && categories.map((item)=>{
          return <CategoryBlock key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default read
