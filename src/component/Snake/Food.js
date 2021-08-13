import React from "react";
import "./style.css";

export default (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
  };

  return <div className="snake_food" style={style}></div>;
};
