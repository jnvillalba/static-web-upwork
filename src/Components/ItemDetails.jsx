import React from "react";

const ItemDetails = ({ title, year, description}) => {
 

  return (
    <div className="open-details">
      <h2 className="year">{year}</h2>
      <h2 className="title">{title}</h2>
      <p className="descriptionText">{description}</p>
    </div>
  );
};

export default ItemDetails;
