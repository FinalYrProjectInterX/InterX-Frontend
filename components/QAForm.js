import { React, useState, useEffect } from "react";

const QAForm = ({ onSubmit, handleBackFromQA }) => {
  const [ques, setques] = useState("");
  const [ans, setans] = useState("");
  const [quesans, setquesans] = useState([]);
  const [quesPlaceHolder, setquesPlaceHolder] = useState([]);

  const handleQuesChange = (event) => {
    setques(event.target.value);
  };
  const handleAnsChange = (event) => {
    setans(event.target.value);
  };
  const onSubmitQuestion = (event) => {
    const newQuesAns = [...quesans, { Question: ques, Answer: ans }];
    setquesans(newQuesAns);
    console.log("quesans", quesans);
    setques("");
    setans("");
  };
  const onSubmitFinal = (event) => {
    const newQuesAns = [...quesans, { Question: ques, Answer: ans }];
    onSubmit(newQuesAns);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
        <label
          for="question"
          className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
        >
          Question {quesans.length + 1}
        </label>
        <textarea
          type="text"
          rows={2}
          id="name"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your Question"
          value={ques}
          onChange={handleQuesChange}
          required
        />
      </div>
      <div className="mb-4 text-black w-[90%] mx-5 md:mx-0 md:w-1/2">
        <label
          for="answer"
          className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
        >
          Answer
        </label>
        <textarea
          type="text"
          rows={5}
          id="name"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Your answer to the above question. Leave blank if you don't want to share"
          value={ans}
          onChange={handleAnsChange}
          required
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-5 md:mx-0 md:w-1/2">
        <button
          className="my-3 md:my-6 block md:mr-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full md:w-1/2"
          onClick={onSubmitQuestion}
          type="button"
          data-ripple-light="true"
        >
          Add Next Question
        </button>
        <button
          className="md:my-6 block md:ml-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full md:w-1/2"
          onClick={onSubmitFinal}
          type="button"
          data-ripple-light="true"
        >
          Continue
        </button>
      </div>
      <div className="flex flex-row justify-between items-center w-[90%] mx-5 md:mx-0 md:w-1/2">
        <button
          className="my-3 block md:mr-2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
          onClick={(event) => {
            event.preventDefault();
            handleBackFromQA();
          }}
          type="button"
          data-ripple-light="true"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default QAForm;
