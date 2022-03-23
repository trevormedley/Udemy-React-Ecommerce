import "./CategoryContainer.styes.scss";
import CategoryItem from "../Category-Item/CategoryItem";

import React from "react";

function CategoryContainer({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryContainer;
