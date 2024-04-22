import React, { useState } from "react";

const AdditionalInfo = ({ onSubmitAdditionalInfo }) => {
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
    onSubmitAdditionalInfo(
      experience,
      tips,
      additionalInfo,
    );
  };
  const handleAdditionalInfoChange = (event) => {
    setadditionalInfo(event.target.value);
  };

  return (
    <div>
      {showExperience && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
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
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleExperienceSubmit}
            >
              Continue
            </button>
        </div>
      )}

      {showTips && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
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
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleTipsSubmit}
            >
              Continue
            </button>
        </div>
      )}
      {showAdditionalInfo && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
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
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleSubmit}
            >
              Submit
            </button>
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;