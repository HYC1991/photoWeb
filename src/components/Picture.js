import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Image Info:
        <a target="_black" href={data.src.large}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Picture;
