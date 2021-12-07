import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./index.css";


function Setting() {
  return (
    <div className="back">
      <div>
      <ArrowBackIosIcon/>
      </div>
      <div className="center">
       <a>设置</a>
      </div>
    </div>
  );
}

export default Setting;
