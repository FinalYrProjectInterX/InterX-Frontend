import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import indexStyle from "../styles/index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import jsonData from "../JsonData/categories.json";
import Footer from "@/components/Footer";

const CategoryBlock = ({ item }) => {
  return (
    item.subCategories.length!=0?<Link
      href={`/category/${item.slug}`}
      className={`flex flex-col items-center ${indexStyle.blockstyle} p-6`}
    >
      <dt className="mt-4 font-semibold text-xl sm:text-2xl lg:text-3xl">
        {item.name}
      </dt>
      <dd className="mt-2 leading-7 text-center text-gray-400">
        {item.description}
      </dd>
      <FontAwesomeIcon icon={faArrowRight} className="mt-4" />
    </Link>:
    <Link
      href={`/transcripts/${item.slug}`}
      className={`flex flex-col items-center ${indexStyle.blockstyle}`}
    >
      <dt className="mt-4 font-semibold text-xl sm:text-2xl lg:text-3xl">
        {item.name}
      </dt>
      <dd className="mt-2 leading-7 text-center text-gray-400">
        {item.description}
      </dd>
      <FontAwesomeIcon icon={faArrowRight} className="mt-4" />
    </Link>
  );
};

const read = ({ user, logout }) => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    setcategories(jsonData);
    console.log("jsonData", jsonData);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} logout={logout} />
      <div className="flex flex-col items-start justify-center my-12 px-4 sm:px-10 lg:px-40">
        <p className="text-2xl sm:text-3xl lg:text-4xl my-2">
          Browse the Interview Scripts of Specific Category and give it a read!!
        </p>
        <p className="text-lg sm:text-xl my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          nostrum! Minima veritatis velit asperiores fugit provident, dolore
          rerum quam, commodi cum saepe possimus id incidunt laborum. Quas,
          enim? Rem obcaecati in eos.
        </p>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-10 lg:px-20 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {categories &&
            categories.map((item) => {
              return <CategoryBlock key={item.id} item={item} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default read;
