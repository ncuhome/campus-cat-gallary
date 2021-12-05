import React from "react";
import { TextField, Button, Stack, Container, Typography } from "@mui/material";
import axios from "axios";
import isEmail from 'is-email'


function Register() {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordrepeat, setpasswordrepeat] = React.useState("");
  const [usernameError, setusernameError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);  

  const handleusernameChange = (event) => {
    const val = event.target.value
    setusernameError(!isEmail(val))
    setusername(val);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const rehandlepasswordChange = (event) => {
    setpasswordrepeat(event.target.value);
  }

  const handleClick = () => {
    if (password !== passwordrepeat) {
      alert("密码不一致");
      return;
    }
    axios({
      method: "post",
      url: "",
      data: {
        username: username,
        pwd: password,
      },
    }).then((res) => {
      console.log(res.data.example);
      window.location.href = '/' 
    });
  };

  return (
    <Container>
      <Stack
        sx={{
          height: '100vh'
        }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4"
          sx={{ mb: 6 }}>
          校园🐱
        </Typography>
        <TextField
          error={usernameError}
          label="邮箱"
          onChange={handleusernameChange}
          color="primary"
          sx={{
            width: '70%',
            borderRadius: '16px',
          }}
        />
        <TextField
          error={passwordError}
          label="密码"
          color="primary"
          onChange={handlepasswordChange}
          sx={{
            width: '70%'
          }}
        />
        <TextField
          error={passwordError}
          label="确认密码"
          color="primary"
          onChange={rehandlepasswordChange}
          sx={{
            width: '70%'
          }}
        />
        <Button variant="contained" color="primary" onClick={handleClick}
          sx={{ width: '40%' }}
        >注册
        </Button>
      </Stack>

    </Container>
  );
}


export default Register;
