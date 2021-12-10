import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: '32px',
  marginLeft: '8px',
  marginRight: '8px',
  alignItems: 'center',
  backgroundColor: '#fff2ca',
  display: 'flex',
  flexDirection: "row",
  boxShadow: 'none',
  border: '1px solid rgba(252, 216, 179, 1)',
}));


function Gallary() {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          margin: '0 auto',
          marginTop: '32px',
          alignItems: 'center',
          width: '80%',
          boxShadow: 'none',
          border: '1px solid rgba(252, 216, 179, 1)',
        }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="输入猫咪名称"
          inputProps={{ 'aria-label': 'search google maps' }} />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    <div>
    <Stack spacing={3}>
        <Item>
          <Box><Avatar alt="花猫" src ="./maomao.png" /></Box>
          <Box>  花猫</Box>
        </Item>
        <Item>
          <Box><Avatar alt="花猫" src ="./maomao.png" /></Box>
          <Box>  花猫</Box>
        </Item>
        <Item>
          <Box><Avatar alt="花猫" src ="./maomao.png" /></Box>
          <Box>  花猫</Box>
        </Item>
    </Stack>
    </div>
    </div>
  );
}

export default Gallary;
