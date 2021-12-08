import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Addbuttton from "../../../components/addbutton";
import { styled } from "@mui/material/styles";
import "./index.css";

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

let ImageMasonry = () => {
  return (
    <Box className="outbox">
      <Box className="mainbox">
        <Masonry columns={1} spacing={1}>
          {itemData.map((item, index) => (
            <Stack key={index}>
              <Label>{index + 1}</Label>
              <img
                src={`${item.img}?w=162&auto=format`}
                // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </Stack>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
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
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="全部" {...a11yProps(0)} />
          <Tab label="NCU" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box className="addbtn" onClick={HandleClick}>
        <Addbuttton></Addbuttton>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <ImageMasonry></ImageMasonry>
        </TabPanel>
        <TabPanel value={value} index={1}>
          暂未开放
        </TabPanel>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
];
