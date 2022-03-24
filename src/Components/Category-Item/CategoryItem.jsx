import "./CategoryItem.styles.scss";

import React from "react";

function Category_Item({ category }) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
      </div>
    </div>
  );
}

export default Category_Item;
