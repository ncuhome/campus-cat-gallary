import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Mine() {
  return (
    <Box
    sx={{ position: 'absolute', top: 40 ,left: '40%',}}>
      <Stack>
        <Avatar/>用户名
      </Stack>
    </Box>
  );
}

