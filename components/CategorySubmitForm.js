import {React, useState, useEffect} from 'react'

const CategorySubmitForm = ({onSubmitCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [clearedInterview, setclearedInterview] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClearedInterviewChange = (event) => {
    setclearedInterview(event.target.value);
  };

  const handleSubmit = () => {
    onSubmitCategory(clearedInterview, selectedCategory);
  }

  const categories = ["B.Tech.", "B.Com.", "BCA", "BSC", "M.Tech.", "MBA"];
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mb-4 text-black w-1/2">
				<label for="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Enter the Name of Examination/Interview which you have cleared...</label>
				<input type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jen bazos" onChange={handleClearedInterviewChange} required />
			</div>
      <div className="mb-4 mt-8 text-black w-1/2">
				<select className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' value={selectedCategory} onChange={handleCategoryChange}>
          <option className='text-bold' value="">Select a Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
			</div>
      <button
        className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleSubmit}
        type="button"
        data-ripple-light="true"
      >
        Continue
      </button>
    </div>
  )
}

export default CategorySubmitForm
