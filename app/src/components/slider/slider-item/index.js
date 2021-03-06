import React from "react";

require("./style.css");

const SliderItem = ({ movie, width }) => {
  return (
    <div className="slider-item" style={{ width: `${width}%` }}>
      <img
        className="slider-image"
        src={`${movie.cover}`}
        alt={movie.title}
      />
    </div>
  );
};

export default SliderItem;
