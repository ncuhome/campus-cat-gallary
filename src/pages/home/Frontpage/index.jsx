import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./1.png";
import Paper from "@mui/material/Paper";
import Addbuttton from "../../../components/addbutton";
import { styled } from "@mui/material/styles";
import "./index.css";
import "./data";
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "left",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: 0,
        fontWeight: "bold",
        padding: "0",
        marginBottom: "16px",
      }}
    >
      <header>
        <Box
          sx={{
            height: "56px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
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
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box
            sx={{
              // alignItems: { xs: "center", md: "flex-start" },
              m: 0,
              margin: "8px",
              minWidth: { md: 350 },
            }}
          >
            username
          </Box>
        </Box>
        <Box>say something ...</Box>
      </header>
      <main>
        <Box>dynamic display images</Box>
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
          <Box>
            <Button sx={{ border: 1, width: "48px", height: "32px" }}>
              喜欢😍
            </Button>
          </Box>
          <Box>
            <Button>评论</Button>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

// let ImageMasonry = () => {
//   return (
//     <Box className="outbox">
//       <Box className="mainbox">
//         <Masonry columns={1} spacing={1}>
//           {itemData.map((item, index) => (
//             <Stack key={index}>
//               <Label>{index + 1}</Label>
//               <img
//                 src={`${item.img}?w=162&auto=format`}
//                 // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </Stack>
//           ))}
//         </Masonry>
//       </Box>
//     </Box>
//   );
// };

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

      <Box>
        <TabPanel value={value} index={0}>
          <ImageMasonry></ImageMasonry>
          <ImageMasonry></ImageMasonry>
        </TabPanel>
        <TabPanel value={value} index={1}>
          暂未开放
        </TabPanel>
      </Box>
      <Box className="addbtn" onClick={HandleClick} sx={{boxShadow: 0}}>
        <Addbuttton></Addbuttton>
      </Box>
    </Box>
  );
}
