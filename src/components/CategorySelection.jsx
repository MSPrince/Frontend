import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`); // Debugging log
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 text-gray-900 font-serif mt-5 pb-2">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`lg:ml-12 mr-2 px-4 py-2 rounded-lg ${
          activeCategory ? "" : "bg-orange-500 text-white"
        } hover:bg-orange-700 transition duration-300`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => handleCategoryClick(category)}
          className={`mr-2 px-4 py-2 rounded-lg ${
            category === activeCategory ? "bg-orange-500 text-white" : ""
          } hover:bg-orange-700 transition duration-300`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
