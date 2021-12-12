import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import "./1.png";
import Paper from "@mui/material/Paper";
import Addbuttton from "../../../components/addbutton";
import { styled } from "@mui/material/styles";
import "./index.css";
import data from "./data.json";
import { Button } from "@mui/material";
// import { boxShadow } from '@mui/system';

const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: "1px solid black",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ImageMasonry = () => {
  // const [data, setData] = useState([]);
  const [liked, setLiked] = useState(data.liked);
  // const handleRefresh = () => {
  //   // 获取远端图片
  //   axios({
  //     method: "get",
  //     url: "http://47.103.210.124:7000/user/viewShare",
  //     responseType: "stream",
  //   }).then(function (response) {
  //     console.log(response.data.shares);
  //     setData(response.data.shares);
  //   });
  // };

  function handleLikebuttonclick() {
    setLiked(!liked);
  }
  // 页面加载完成时
  // useEffect(() => {
  //   console.log("load done");
  //   handleRefresh();
  // }, []);
  const handleLikeButtonClick = (item) => {
    setLiked(!liked);
  };
  const profile = data.data.map((person) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "left",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: 0,
        fontWeight: "medium",
        padding: "0",
        marginBottom: 3,
      }}
    >
      <header>
        <Box
          sx={{
            height: "56px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 40,
                width: 40,
                borderRadius: 100,
                display: "block",
              }}
              src={person.icon}
            />
            <Box
              sx={{
                // alignItems: { xs: "center", md: "flex-start" },
                m: 0,
                margin: "8px",
                minWidth: { md: 350 },
              }}
            >
              <div>{person.username}</div>
            </Box>
          </Box>
          <Box sx={{ color: "#999999" }}>{person.CreatedAt.substr(11, 5)}</Box>
        </Box>
        <Box>{person.msg}</Box>
      </header>
      <main>
        <Box>
          <img src={person.img} style={{ width: "100%" }} />
        </Box>
      </main>
      <footer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 40,
          }}
        >
          <Box sx={{ alignItems: "center" }}>
            <Button
              sx={{ border: 1, width: "80px", height: "32px" }}
              onClick={handleLikeButtonClick}
            >
              {liked === true ? "已点赞" : "点赞🎉"}
            </Button>
          </Box>
          <Box>
            <Button>评论</Button>
          </Box>
        </Box>
      </footer>
    </Box>
  ));
  return <Box>{profile}</Box>;
};

const HandleClick = () => {
  console.log("跳转至设置页面");
  window.location.href = "/launch";
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 0,
          borderColor: "divider",
          position: "fixed",
          bgcolor: "white",
          width: "100%",
          zIndex: 999,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="全部" {...a11yProps(0)} />
          <Tab label="NCU" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <Box sx={{ pt: 4 }}>
        <TabPanel value={value} index={0}>
          <ImageMasonry></ImageMasonry>
          <ImageMasonry></ImageMasonry>
        </TabPanel>
        <TabPanel value={value} index={1}>
          暂未开放
        </TabPanel>
      </Box>
      <Box className="addbtn" onClick={HandleClick} sx={{ boxShadow: 0 }}>
        <Addbuttton></Addbuttton>
      </Box>
    </Box>
  );
}
