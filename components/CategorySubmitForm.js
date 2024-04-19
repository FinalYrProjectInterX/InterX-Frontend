import React, { useState, useEffect } from 'react';
import jsonData from '../JsonData/categories.json';

const CategorySubmitForm = ({ onSubmitCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [clearedInterview, setClearedInterview] = useState('');
  const [additionalFields, setAdditionalFields] = useState({});

  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value;
    setSelectedCategory(categoryValue);

    // Reset subcategory and additional fields when category changes
    setSelectedSubCategory('');
    setAdditionalFields({});
  };

  const handleSubCategoryChange = (event) => {
    const subCategoryValue = event.target.value;
    setSelectedSubCategory(subCategoryValue);
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
    onSubmitCategory(
      clearedInterview,
      selectedCategory,
      selectedSubCategory,
      additionalFields,
    );
  };

  const categoryAdditionalFields = {
    UPSC: ['Optional Subject', 'Gap Years', 'Marks', 'Year of Interview'],
    MBA: ['Specialization', 'Work Experience', 'CAT/GMAT Score','Year of Admission'],
    VISA: ['VISA Type', 'Country Applied for VISA', 'Purpose of Travel','Year of Interview'],
    'Coding & Technical': ['Programming Languages', 'Tech Stack Used', 'Work Experience' ,'Year of Interview'],
    'Indian Armed Forces': ['Service Name', 'Branch', 'Commission Type','Year of Interview'],
    'Bank PO': ['Bank Name', 'Work Experience', 'Year of Interview'],
  };

  const hasSubCategories = (category) => {
    const foundCategory = jsonData.find((cat) => cat.name === category);
    return foundCategory && foundCategory.subCategories && foundCategory.subCategories.length > 0;
  };

  const renderSubCategorySelect = () => {
    if (selectedCategory && hasSubCategories(selectedCategory)) {
      const subCategories = jsonData.find((cat) => cat.name === selectedCategory).subCategories;
      return (
        <div className="mb-4 mt-8 text-black w-1/2">
          <select
            className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
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
        <div key={field} className="mb-4 text-black w-1/2">
          <label htmlFor={field} className="block text-sm font-medium text-white dark:text-gray-300 mb-2">{field}</label>
          <input
            type="text"
            id={field}
            name={field}
            value={additionalFields[field] || ''}
            onChange={handleAdditionalFieldChange}
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      ));
    }
    return null;
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mb-4 text-black w-1/2">
        <label htmlFor="name" className="block text-sm font-medium text-white dark:text-gray-300 mb-2">Enter the Name of Examination/Interview which you have cleared...</label>
        <input
          type="text"
          id="name"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Exam/Interview name"
          onChange={handleClearedInterviewChange}
          required
        />
      </div>
      <div className="mb-4 mt-8 text-black w-1/2">
        <select
          className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
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

      <button
        className="my-6 block w-1/2 select-none rounded-lg bg-white py-2 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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