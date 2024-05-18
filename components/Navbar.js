import { React, useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, logout }) => {
  const [dropdown, setdropdown] = useState(false);

  return (
    <div
      className={`flex flex-row items-center justify-between px-6 py-6 ${styles.navStyle}`}
    >
      <div className="text-5xl text-bold mx-8">
        <Link href="/" className="">
          <h2>InterX</h2>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="mx-4 text-xl">
          <Link href="/" className="">
            Home
          </Link>
        </div>
        <div className="mx-4 text-xl">
          <Link href="/read" className="">
            Read
          </Link>
        </div>
        <div className="mx-4 text-xl">
          <Link href="/contribute" className="">
            Contribute
          </Link>
        </div>
        {user.value && (
          <button
            id="btnSidebarToggler"
            type="button"
            onMouseMove={(event) => {
              event.preventDefault();
              setdropdown(true);
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setdropdown(false);
            }}
            className="relative py-2 px-4 text-2xl flex flex-row items-center text-black hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faCircleUser} className="text-white" />
          </button>
        )}
        {dropdown && (
          <div
            className="absolute shadow-md top-14 right-2 ease-out duration-100 bg-white text-black px-4 py-4 my-3 z-50 text-center"
            onMouseMove={(event) => {
              event.preventDefault();
              setdropdown(true);
            }}
            onMouseLeave={(event) => {
              event.preventDefault();
              setdropdown(false);
            }}
          >
            <ul>
              <Link
                href="/profile"
                className="text-sm font-medium hover:text-black"
              >
                <li className="hover:bg-gray-100 my-2">Your Profile</li>
              </Link>
              <button
                className="text-sm font-medium hover:bg-gray-100 hover:text-black"
                onClick={(event) => {
                  event.preventDefault();
                  logout();
                  setdropdown(false);
                }}
              >
                <li>Logout</li>
              </button>
            </ul>
          </div>
        )}
        {!user.value && (
          <div className="mx-4 text-xl">
            <Link href="/login" className="">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
