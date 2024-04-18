// import React, { useState, useEffect } from "react";

// const AdditionalInfo = ({ onSubmitAdditionalInfo }) => {
//   const [experienceTADisplay, setexperienceTADisplay] = useState("block");
//   const [tipsTADisplay, settipsTADisplay] = useState("none");
//   const [AdditionalInfoTADisplay, setAdditionalInfoTADisplay] =
//     useState("none");
//   const [experience, setexperience] = useState("");
//   const [tips, settips] = useState("");
//   const [additionalInfo, setadditionalInfo] = useState("");

//   const handleExperience = (event) => {
//     setexperience(event.target.value);
//     setexperienceTADisplay("block");
//     settipsTADisplay("none");
//     setAdditionalInfoTADisplay("none");
//   };
//   const handleTips = (event) => {
//     settips(event.target.value);
//     setexperienceTADisplay("none");
//     settipsTADisplay("block");
//     setAdditionalInfoTADisplay("none");
//   };

//   const handleSubmit = () => {
//     onSubmitAdditionalInfo({
//       experience,
//       tips,
//       additionalInfo,
//     });
//   };

//   return (
//     <div>
//       <div
//         className="mb-4 text-black w-1/2 "
//         style={{ display: experienceTADisplay }}
//       >
//         <label
//           for="answer"
//           className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
//         >
//           Experience
//         </label>
//         <textarea
//           type="text"
//           rows={5}
//           id="name"
//           className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           placeholder="Jen bazos"
//           onChange={handleExperience}
//           required
//         />
//         <button
//           className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//           onClick={handleSubmit}
//           type="button"
//           data-ripple-light="true"
//         >
//           Continue
//         </button>
//       </div>
//       <div
//         className="mb-4 text-black w-1/2 "
//         style={{ display: tipsTADisplay }}
//       >
//         <label
//           for="answer"
//           className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
//         >
//           Tips
//         </label>
//         <textarea
//           type="text"
//           rows={5}
//           id="name"
//           className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           placeholder="Jen bazos"
//           onChange={handleTips}
//           required
//         />
//         <button
//           className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//           onClick={handleSubmit}
//           type="button"
//           data-ripple-light="true"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AdditionalInfo;
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
    onSubmitAdditionalInfo({
      experience,
      tips,
      additionalInfo,
    });
  };
  const handleAdditionalInfoChange = (event) => {
    setadditionalInfo(event.target.value);
  };

  return (
    <div>
      {showExperience && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
            <label className="block text-xl text-center font-medium text-white dark:text-gray-300 mb-2">
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
          <div className="flex flex-row justify-center items-center w-1/2">
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleExperienceSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {showTips && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
            <label className="block text-xl text-center font-medium text-white dark:text-gray-300 mb-2">
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
          <div className="flex flex-row justify-center items-center w-1/2">
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleTipsSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {showAdditionalInfo && (
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-4 mt-8  text-black w-1/2 ">
            <label className="block text-xl text-center font-medium text-white dark:text-gray-300 mb-2">
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
          <div className="flex flex-row justify-center items-center w-1/2">
            <button
              className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={handleSubmit}
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
