import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={`flex flex-row items-center justify-between px-6 py-6 ${styles.navStyle}`}>
      <div className='text-5xl text-bold mx-8'>
        <h2>InterX</h2>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className="mx-4 text-xl">
          <Link href="/read" className="">Read</Link>
        </div>
        <div className="mx-4 text-xl">
          <Link href="/contribute" className="">Contribute</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
