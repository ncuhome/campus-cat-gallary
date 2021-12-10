import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MaomaoImg from '../../../image/maomao.png'
import BackgroundImg from '../../../image/backgroundMaomao.png'


const HandleClick = () => {
  console.log("跳转至设置页面");
  window.location.href = "/setting";
};

const backgroundStyle = {
  backgroundSize: "cover" ,
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${BackgroundImg})`,
}

export default function Mine() {
  return (
    <div style={backgroundStyle} >
      <Box>
      <Avatar
            src={MaomaoImg }
            sx={{ width: 160, height: 160, top: 80, margin: '0 auto'}}
      />
      </Box>
    </div>
  );
}
