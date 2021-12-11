import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GallaryIcon from "@mui/icons-material/Book";
import TipsIcon from "@mui/icons-material/TipsAndUpdates";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";

import Frontpage from "./Frontpage/index";
import Tips from "./Tips/index";
import Mine from "./Mine/index";
import Gallary from "./Gallary/index";

const tab = [
  {
    label: "首页",
    icon: <HomeIcon />,
    component: <Frontpage />,
  },
  {
    label: "图鉴",
    icon: <GallaryIcon />,
    component: <Gallary />,
  },
  {
    label: "贴士",
    icon: <TipsIcon />,
    component: <Tips />,
  },
  {
    label: "我的",
    icon: <PersonIcon />,
    component: <Mine />,
  },
];

function Home() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
      }}
    >
      <Box
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <BottomNavigation
          showLabels
          value={currentTabIndex}
          onChange={(event, newValue) => {
            setCurrentTabIndex(newValue);
          }}
        >
          {tab.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
      <div style={{ overflowX: "hidden" }}>
        {tab[currentTabIndex]?.component || "暂无"}
      </div>
    </div>
  );
}

export default Home;
