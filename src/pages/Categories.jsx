// src/pages/Explore.jsx
import React, { useState } from "react";
import { allCategories } from "../data/data";

const Categories = () => {
  const [selectedLetter, setSelectedLetter] = useState("All");

  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filteredCategories = allCategories.filter((category) => {
    if (selectedLetter === "All") return true;
    return category.name.toLowerCase().startsWith(selectedLetter.toLowerCase());
  });

  const handleClick = (categoryName) => {
    // ✨ Replace with actual routing logic
    console.log(`Navigate to: ${categoryName}`);
    // e.g. navigate(`/templates/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Explore Templates by Category
      </h1>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => setSelectedLetter("All")}
          className={`px-3 py-1 border rounded ${
            selectedLetter === "All" ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          All
        </button>
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`px-3 py-1 border rounded ${
              selectedLetter === letter ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Category Cards */}
      {filteredCategories.length === 0 ? (
        <p className="text-center text-gray-500">No categories found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer rounded shadow-md overflow-hidden hover:shadow-lg transition duration-200 bg-white"
              onClick={() => handleClick(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-50 w-full p-3"
              />
              <div className="p-4 text-center font-semibold text-lg text-gray-800">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
