import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MaomaoImg from "../../../image/maomao.png";
import BackgroundImg from "../../../image/backgroundMaomao.png";

const HandleClick = () => {
  console.log("跳转至设置页面");
  window.location.href = "/setting";
};

const backgroundStyle = {
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${BackgroundImg})`,
};

export default function Mine() {
  return (
    <Box style={backgroundStyle}>
      <Box
        sx={{
          display: "flex",
          padding: "64px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            m: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Avatar src={MaomaoImg} sx={{ height: "80px", width: "80px" }} />
        </Box>

        <Box
          sx={{
            m: 0,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          7777
        </Box>
      </Box>
    </Box>
  );
}
