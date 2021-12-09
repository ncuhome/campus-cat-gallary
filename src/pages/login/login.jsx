import React from "react";
import {
  TextField,
  Button,
  Stack,
  Container,
  Typography,
  styled,
} from "@mui/material";
import axios from "axios";
import isEmail from "is-email";

import api from "../../api/index";
import cookie from 'react-cookies'


const MyButton = styled(Button)({
  "&": {
    borderRadius: 0,
  },
});

function Login() {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [hitokoto, sethitokoto] = React.useState("");

  const [usernameError, setusernameError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);

  const handleusernameChange = (event) => {
    const val = event.target.value;
    setusernameError(!isEmail(val));
    setusername(val);
  };

  const handlepasswordChange = (event) => {
    setpasswordError(false);
    setpassword(event.target.value);
  };

  const handleClick = () => {
    if (username.length === 0 || password.length === 0) {
      setusernameError(username.length === 0);
      setpasswordError(password.length === 0);
      return;
    }

    axios({
      method: "get",
      url: "https:47.103.210.124:7000/user/login",
      data: {
        email: username,
        pwd: password,
      },
    }).then((res) => {
      console.log(res.data.msg);
    });
  };

  const handleRegister = () => {
    console.log("!!!ZHUCE");
    window.location.href = "/register";
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
        }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" sx={{ mb: 6 }}>
          校园🐱
        </Typography>
        <TextField
          error={usernameError}
          label="用户名（邮箱）"
          onChange={handleusernameChange}
          color="primary"
          sx={{
            width: "70%",
            borderRadius: "16px",
          }}
        />
        <TextField
          error={passwordError}
          label="密码"
          color="primary"
          onChange={handlepasswordChange}
          sx={{
            width: "70%",
          }}
        />
        <MyButton
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{ width: "40%" }}
        >
          登录
        </MyButton>
        <Button onClick={handleRegister}>没有账号？立即注册</Button>
      </Stack>
    </Container>
  );
}

export default Login;
