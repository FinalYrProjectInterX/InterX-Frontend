import React, { useState } from "react";

const AdditionalInfo = ({
  onSubmitAdditionalInfo,
  handleBackFromExperience,
}) => {
  const [showExperience, setShowExperience] = useState(true);
  const [showTips, setShowTips] = useState(false);
  const [showAdditionalInfo, setshowAdditionalInfo] = useState(false);
  const [experience, setExperience] = useState("");
  const [tips, setTips] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleExperienceSubmit = () => {
    setShowExperience(false);
    setShowTips(true);
    setshowAdditionalInfo(false);
  };

  const handleTipsChange = (event) => {
    setTips(event.target.value);
  };
  const handleTipsSubmit = () => {
    setShowExperience(false);
    setShowTips(false);
    setshowAdditionalInfo(true);
  };

  const handleSubmit = () => {
    onSubmitAdditionalInfo(experience, tips, additionalInfo);
  };
  const handleAdditionalInfoChange = (event) => {
    setadditionalInfo(event.target.value);
  };

  const handleBackFromTips = (event) => {
    event.preventDefault();
    setShowExperience(true);
    setShowTips(false);
    setshowAdditionalInfo(false);
  };

  const handleBackFromAdditionalInfo = (event) => {
    event.preventDefault();
    setShowExperience(false);
    setShowTips(true);
    setshowAdditionalInfo(false);
  };

  return (
    <div>
      {showExperience && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
            <label className="block text-xl font-medium text-white dark:text-gray-300 mb-2">
              Experience
            </label>
            <textarea
              rows={5}
              className="shadow-sm rounded-md w-full px-3 py-2  border  border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your experience..."
              value={experience}
              onChange={handleExperienceChange}
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center w-[90%] mx-5 md:mx-0 md:w-1/2">
            <button
              className="my-6 block  ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2"
              onClick={(event) => {
                event.preventDefault();
                handleBackFromExperience();
              }}
              type="button"
              data-ripple-light="true"
            >
              Back
            </button>
            <button
              className="my-6 block  ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2"
              onClick={handleExperienceSubmit}
              type="button"
              data-ripple-light="true"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {showTips && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
            <label className="block text-xl font-medium text-white dark:text-gray-300 mb-2">
              Tips
            </label>
            <textarea
              rows={5}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your tips..."
              value={tips}
              onChange={handleTipsChange}
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center w-[90%] mx-5 md:mx-0 md:w-1/2">
            <button
              className="my-6 block  ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2"
              onClick={handleBackFromTips}
              type="button"
              data-ripple-light="true"
            >
              Back
            </button>
            <button
              className="my-6 block  ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2"
              onClick={handleTipsSubmit}
              type="button"
              data-ripple-light="true"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {showAdditionalInfo && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
            <label className="block text-xl font-medium text-white dark:text-gray-300 mb-2">
              Additional Info
            </label>
            <textarea
              rows={5}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your tips..."
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center w-[90%] mx-5 md:mx-0 md:w-1/2">
            <button
              className="my-6 block w-full ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              onClick={handleBackFromAdditionalInfo}
              type="button"
              data-ripple-light="true"
            >
              Back
            </button>
            <button
              className="my-6 block w-full ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              onClick={handleSubmit}
              type="button"
              data-ripple-light="true"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;
