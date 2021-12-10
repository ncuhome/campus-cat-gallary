import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import MaomaoImg from '../../../image/maomao.png'
import BackgroundImg from '../../../image/backgroundMaomao.png'

import "./index.css";

const HandleClick = () => {
  console.log("跳转至设置页面");
  window.location.href = "/setting";
};

const backgroundStyle = {
  backgroundSize: "cover" ,
  backgroundPosition: "center",
  width: "375px",
  height: "812px",
  backgroundImage: `url(${BackgroundImg})`,
}

export default function Mine() {
  return (
    <div style={backgroundStyle}>
      <Box className="box">
        <Stack direction="row" spacing={2}>
          <Avatar
            src={MaomaoImg }
            sx={{ width: 160, height: 160, top: 80, margin: '0 auto'}}
          />
        </Stack>
        <nav aria-label="main mailbox folders">
          <List sx={{ top: 128 }}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="我的消息" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={HandleClick}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="设置" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
}
