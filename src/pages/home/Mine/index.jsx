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
        sx={{ textAlign: "right", paddingRight: "40px", paddingTop: "64px" }}
      >
        <icon>88</icon>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "48px",
          width: "100%",
          display: "flex",
          justifyContent: "left",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            m: 0,
            display: "flex",
            justifyContent: "left",
            margin: "16px",
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
            flexDirection: "column",
          }}
        >
          <Box>7777</Box>
          <Box sx={{ color: "#999999" }}>something to say</Box>
        </Box>
      </Box>
    </Box>
  );
}
