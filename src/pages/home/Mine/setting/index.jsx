import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./index.css";

const handleClick = () => {
  window.history.back();
};

function Setting() {
  return (
    <div className="back">
      <div onClick={handleClick}>
        <ArrowBackIosIcon />
      </div>
      <div className="center">
        <a>返回</a>
      </div>
    </div>
  );
}

export default Setting;
