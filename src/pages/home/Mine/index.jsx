import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Mine() {
  return (
    <Box
    sx={{ position: 'absolute', top: 50 ,left: '10%',}}>
      <Stack direction="row" spacing={2}>
        <Avatar
        src="./hack.png"
        sx={{width: 56, height:56 }}
        />
        
      </Stack>
    </Box>
  );
}

