import { React, useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, logout }) => {
  const [dropdown, setdropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenState, sethiddenState] = useState('');

  const handleNavbarMenuOpen = (event) => {
    event.preventDefault();
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    // const laptopMenu = document.getElementById('laptop-menu');
    mobileMenu.classList.toggle('hidden');
    // laptopMenu.classList.toggle('hidden');
  }

  return (
    // <div
    //   className={`flex flex-row items-center justify-between px-6 py-6 ${styles.navStyle}`}
    // >
    //   <div className="text-5xl text-bold mx-8">
    //     <Link href="/" className="">
    //       <h2>InterX</h2>
    //     </Link>
    //   </div>
    //   <div className="flex flex-row items-center justify-between">
    //     <div className="mx-4 text-xl">
    //       <Link href="/" className="">
    //         Home
    //       </Link>
    //     </div>
    //     <div className="mx-4 text-xl">
    //       <Link href="/read" className="">
    //         Read
    //       </Link>
    //     </div>
    //     <div className="mx-4 text-xl">
    //       <Link href="/contribute" className="">
    //         Contribute
    //       </Link>
    //     </div>
    //     {user.value && (
    //       <button
    //         id="btnSidebarToggler"
    //         type="button"
    //         onMouseMove={(event) => {
    //           event.preventDefault();
    //           setdropdown(true);
    //         }}
    //         onMouseLeave={(event) => {
    //           event.preventDefault();
    //           setdropdown(false);
    //         }}
    //         className="relative py-2 px-4 text-2xl flex flex-row items-center text-black hover:text-gray-500"
    //       >
    //         <FontAwesomeIcon icon={faCircleUser} className="text-white" />
    //       </button>
    //     )}
    //     {dropdown && (
    //       <div
    //         className="absolute shadow-md top-14 right-2 ease-out duration-100 bg-white text-black px-4 py-4 my-3 z-50 text-center"
    //         onMouseMove={(event) => {
    //           event.preventDefault();
    //           setdropdown(true);
    //         }}
    //         onMouseLeave={(event) => {
    //           event.preventDefault();
    //           setdropdown(false);
    //         }}
    //       >
    //         <ul>
    //           <Link
    //             href="/profile"
    //             className="text-sm font-medium hover:text-black"
    //           >
    //             <li className="hover:bg-gray-100 my-2">Your Profile</li>
    //           </Link>
    //           <button
    //             className="text-sm font-medium hover:bg-gray-100 hover:text-black"
    //             onClick={(event) => {
    //               event.preventDefault();
    //               logout();
    //               setdropdown(false);
    //             }}
    //           >
    //             <li>Logout</li>
    //           </button>
    //         </ul>
    //       </div>
    //     )}
    //     {!user.value && (
    //       <div className="mx-4 text-xl">
    //         <Link href="/login" className="">
    //           Login
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    //   {menuOpen && (
    //     <div className="flex flex-col items-center w-full mt-4 md:hidden">
    //       <div className="mx-4 text-xl py-2">
    //         <Link href="/" className="" onClick={() => setMenuOpen(false)}>
    //           Home
    //         </Link>
    //       </div>
    //       <div className="mx-4 text-xl py-2">
    //         <Link href="/read" className="" onClick={() => setMenuOpen(false)}>
    //           Read
    //         </Link>
    //       </div>
    //       <div className="mx-4 text-xl py-2">
    //         <Link href="/contribute" className="" onClick={() => setMenuOpen(false)}>
    //           Contribute
    //         </Link>
    //       </div>
    //       {user.value ? (
    //         <div className="relative py-2 px-4 text-2xl flex flex-row items-center text-black hover:text-gray-500">
    //           <FontAwesomeIcon icon={faCircleUser} className="text-white" />
    //           <div className="absolute shadow-md top-14 right-2 bg-white text-black px-4 py-4 my-3 z-50 text-center">
    //             <ul>
    //               <Link href="/profile" className="text-sm font-medium hover:text-black">
    //                 <li className="hover:bg-gray-100 my-2" onClick={() => setMenuOpen(false)}>Your Profile</li>
    //               </Link>
    //               <button
    //                 className="text-sm font-medium hover:bg-gray-100 hover:text-black"
    //                 onClick={(event) => {
    //                   event.preventDefault();
    //                   logout();
    //                   setMenuOpen(false);
    //                 }}
    //               >
    //                 <li>Logout</li>
    //               </button>
    //             </ul>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="mx-4 text-xl py-2">
    //           <Link href="/login" className="" onClick={() => setMenuOpen(false)}>
    //             Login
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <nav className="px-8 py-6 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="md:text-5xl md:text-bold self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            InterX
          </span>
        </a>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={handleNavbarMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
      className={`w-full md:w-auto hidden absolute top-[12vh] left-0 bg-black bg-opacity-75 z-50`}
      id="mobile-menu"
    >
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
        <li>
          <Link
            href="/"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/read"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Read
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contribute
          </Link>
        </li>
        {user.value ? (
          <>
            <li>
              <a
                href="/profile"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </a>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={(event) => { event.preventDefault(); logout(); setMenuOpen(false); }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <a
              href="/login"
              className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </div>
        
        <div
      className={`w-full md:block md:w-auto hidden`}
      id="laptop-menu"
    >
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
        <li>
          <Link
            href="/"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/read"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Read
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contribute
          </Link>
        </li>
        {user.value ? (
          <>
            <li>
              <a
                href="/profile"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </a>
            </li>
            <li>
              <button
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={(event) => { event.preventDefault(); logout(); setMenuOpen(false); }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <a
              href="/login"
              className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:underline md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
