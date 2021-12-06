import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsIcon from '@mui/icons-material/Settings';

const HandleClick = () => {
  console.log("跳转至设置页面");
  window.location.href = "/setting";
}

export default function Mine() {
  return (
    <Box >
      <Stack direction="row" spacing={2}>
        <Avatar
        src="./hack.png"
        sizes="56"
        sx={{width: 56, height:56, top: 50 ,left: '10%',}}
        />
      </Stack>
      <nav aria-label="main mailbox folders" >
        <List sx={{top: 128,}}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="我的消息" />
            </ListItemButton>
          </ListItem >
          <ListItem>
            <ListItemButton onClick={HandleClick}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="设置"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
