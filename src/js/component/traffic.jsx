import React, { useState } from "react";

const Traffic = () => {
  const [colors, setColor] = useState(["red", "yellow", "green"]);
  const [currentColor, setCurrentColor] = useState(0);

  const changeLight = () => {
    setCurrentColor((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const changeToPurple = () => {
    setColor (["purple", ...colors.slice (1)]);

    setCurrentColor ((prevIndex)=> prevIndex >=colors.length ? colors.length - 1 : prevIndex);
  };



  return (
    <div className="container">
      <div className="trafficLight">
        {colors.map((color, index) => (
          <span
            key={color}
            className={` ${color} ${
                currentColor === index ? "glow" : ""
            }`}
            onClick={() => setCurrentColor(index)}
          ></span>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={changeLight}
      >
        Change Light
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={changeToPurple}
      >
        Change to Purple
      </button>
    </div>
  );
};

export default Traffic;