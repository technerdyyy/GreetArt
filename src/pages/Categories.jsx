// src/pages/Explore.jsx
import React, { useState } from "react";
import { allCategories } from "../data/data";

const Categories = () => {
  const [selectedLetter, setSelectedLetter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filteredCategories = allCategories.filter((category) => {
    const matchesLetter =
      selectedLetter === "All" ||
      category.name.toLowerCase().startsWith(selectedLetter.toLowerCase());

    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesLetter && matchesSearch;
  });

  const handleClick = (categoryName) => {
    // ✨ Replace with actual routing logic
    console.log(`Navigate to: ${categoryName}`);
    // e.g. navigate(`/templates/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Explore Templates by Category
      </h1>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-md border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* 📦 Category Cards */}
      {filteredCategories.length === 0 ? (
        <p className="text-center text-gray-500">No categories found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
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

      {/* 🔠 Alphabet Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
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
    </div>
  );
};

export default Categories;
