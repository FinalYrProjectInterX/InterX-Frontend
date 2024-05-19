import React, { useState, useEffect } from "react";
import jsonData from "../JsonData/categories.json";

const CategorySubmitForm = ({ onSubmitCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [clearedInterview, setClearedInterview] = useState("");
  const [additionalFields, setAdditionalFields] = useState({});
  const [categoryslug, setcategoryslug] = useState("");
  const [urlslug, seturlslug] = useState("");
  const [interviewMode, setinterviewMode] = useState("");
  const [otherInfo, setotherInfo] = useState("");
  const [controlDisplay, setcontrolDisplay] = useState("none");

  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value;
    setSelectedCategory(categoryValue);
    const foundCategory = jsonData.find((cat) => cat.name === categoryValue);
    if (foundCategory) {
      setcontrolDisplay("block");
      setcategoryslug(foundCategory.slug);
      const currentDate = new Date();
      const formattedDate = currentDate
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "");
      const temp =
        foundCategory.slug +
        "-" +
        clearedInterview
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "") +
        "-" +
        formattedDate;
      seturlslug(temp);
    }
    // Reset subcategory and additional fields when category changes
    setSelectedSubCategory("");
    setAdditionalFields({});
  };

  const handleSubCategoryChange = (event) => {
    const subCategoryValue = event.target.value;
    setSelectedSubCategory(subCategoryValue);
    const foundCategory = jsonData.find((cat) => cat.name === selectedCategory);
    if (foundCategory) {
      const subCategories = foundCategory.subCategories;
      const subCategory = subCategories.find(
        (subcat) => subcat.name === subCategoryValue
      );
      if (subCategory) {
        setcategoryslug(subCategory.slug);
        const currentDate = new Date();
        const formattedDate = currentDate
          .toISOString()
          .split("T")[0]
          .replace(/-/g, "");
        const formattedTime = currentDate
          .toTimeString()
          .split(" ")[0]
          .replace(/:/g, "");
        const timestamp = `${formattedDate}${formattedTime}`;
        const temp =
          subCategory.slug +
          "-" +
          clearedInterview
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") +
          "-" +
          timestamp;
        console.log("urlSlug++", temp);
        seturlslug(temp);
      }
    }
    setAdditionalFields({});
  };

  const handleClearedInterviewChange = (event) => {
    setClearedInterview(event.target.value);
  };

  const handleAdditionalFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setAdditionalFields((prevFields) => ({
      ...prevFields,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = () => {
    console.log("categoryslug+++", categoryslug);
    onSubmitCategory(
      clearedInterview,
      selectedCategory,
      selectedSubCategory,
      categoryslug,
      urlslug,
      additionalFields,
      interviewMode,
      otherInfo
    );
  };

  const categoryAdditionalFields = {
    UPSC: ["Optional Subject", "Gap Years", "Marks", "Year of Interview"],
    MBA: [
      "Specialization",
      "Work Experience",
      "CAT/GMAT Score",
      "Year of Admission",
    ],
    VISA: [
      "VISA Type",
      "Country Applied for VISA",
      "Purpose of Travel",
      "Year of Interview",
    ],
    "Coding & Technical": [
      "Programming Languages",
      "Tech Stack Used",
      "Work Experience",
      "Year of Interview",
    ],
    "Indian Armed Forces": [
      "Service Name",
      "Branch",
      "Commission Type",
      "Year of Interview",
    ],
    "Bank PO": ["Bank Name", "Work Experience", "Year of Interview"],
  };

  const hasSubCategories = (category) => {
    const foundCategory = jsonData.find((cat) => cat.name === category);
    return (
      foundCategory &&
      foundCategory.subCategories &&
      foundCategory.subCategories.length > 0
    );
  };

  const renderSubCategorySelect = () => {
    if (selectedCategory && hasSubCategories(selectedCategory)) {
      const subCategories = jsonData.find(
        (cat) => cat.name === selectedCategory
      ).subCategories;
      return (
        <div className="mb-4 mt-3 text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
          <select
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="">Select a Subcategory</option>
            {subCategories.map((subCat) => (
              <option key={subCat.id} value={subCat.name}>
                {subCat.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return null;
  };

  const renderAdditionalFields = () => {
    if (selectedCategory) {
      const fieldsToRender = categoryAdditionalFields[selectedCategory] || [];
      return fieldsToRender.map((field) => (
        <div key={field} className="mb-2 text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
          <label
            htmlFor={field}
            className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
          >
            {field}
          </label>
          <input
            type={
              field === "Gap Years" ||
              field === "Marks" ||
              field === "Year of Interview" ||
              field === "Year of Admission" ||
              field === "Work Experience" ||
              field === "CAT/GMAT Score" ||
              field === ""
                ? "number"
                : "text"
            }
            id={field}
            name={field}
            value={additionalFields[field] || ""}
            onChange={handleAdditionalFieldChange}
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      ));
    }
    return null;
  };

  const handleInterviewModeChange = (event) => {
    event.preventDefault();
    setinterviewMode(event.target.value);
  };

  const handleOtherInformationChanges = (event) => {
    event.preventDefault();
    setotherInfo(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 mt-3 text-black mx-5 md:mx-0 md:w-1/2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
        >
          Enter the name of the interview you attended or the institute you
          interviewed with...
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Exam/Institute name"
          onChange={handleClearedInterviewChange}
          required
        />
      </div>
      <div className="mb-4 mt-3 text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
        <select
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a Category</option>
          {Object.keys(categoryAdditionalFields).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Render subcategory select if the selected category has subcategories */}
      {renderSubCategorySelect()}

      {/* Render additional fields based on selected category and subcategory */}
      {renderAdditionalFields()}

      <div
        className="mb-4 mt-6 text-black w-[90%] mx-5 md:mx-0 md:w-1/2"
        style={{ display: controlDisplay }}
      >
        <select
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={interviewMode}
          onChange={handleInterviewModeChange}
        >
          <option value="">Select Interview Mode</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div
        className="mb-4 mt-1 text-black w-[90%] mx-5 md:mx-0 md:w-1/2"
        style={{ display: controlDisplay }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
        >
          Other information about your profile
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Engineer / Computer Science / EWS Category / Online mode"
          onChange={handleOtherInformationChanges}
          required
        />
      </div>

      <button
        className="my-6 block w-[90%] mx-5 md:mx-0 md:w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleSubmit}
        type="button"
        data-ripple-light="true"
      >
        Continue
      </button>
    </div>
  );
};

export default CategorySubmitForm;
