import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import indexStyle from "../../styles/index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import jsonData from "../../JsonData/categories.json";
import Footer from "@/components/Footer";

const SubCategoryBlock = ({ item }) => {
  return (
    <Link
      href={`/transcripts/${item.slug}`}
      className={`flex flex-col items-center ${indexStyle.blockstyle}`}
    >
      <dt className="mt-4 font-semibold text-xl sm:text-2xl lg:text-3xl">
        {item.name}
      </dt>
      <dd className="mt-2 leading-7 text-center text-white">
        {item.description}
      </dd>
      <FontAwesomeIcon icon={faArrowRight} className="mt-4" />
    </Link>
  );
};

const DynamicCategories = ({ user, logout }) => {
  const router = useRouter();
  const [subCategories, setsubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { slug } = router.query;
      console.log("slug:", slug);

      if (slug) {
        const category = jsonData.find((category) => category.slug === slug);
        console.log("category:", category);
        if (category) {
          setsubCategories(category.subCategories);
        }
      }
    };

    fetchData();
    setLoading(false);
  }, [router.query.slug]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div className="min-h-screen">
        <Navbar user={user} logout={logout} />
        <div class="flex flex-col items-center justify-center lg:my-12 lg:mx-40 ">
          <p class="text-2xl sm:text-3xl lg:text-4xl mt-10 text-center">
            Browse the Interview Scripts of Specific Category and give it a
            read!!
          </p>
          <p class="text-sm sm:text-base lg:text-lg my-2 text-center">
            Discover firsthand experiences from successful candidates and gain
            insights into the interview process.
            <br />
            Navigate through a variety of categories to find transcripts
            tailored to your specific needs.
          </p>
        </div>
        <div className="flex mx-10 md:mx-20 my-10 md:my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {subCategories &&
              subCategories.map((item) => {
                return <SubCategoryBlock key={item.id} item={item} />;
              })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DynamicCategories;
