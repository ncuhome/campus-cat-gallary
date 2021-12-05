import React from "react";
import { TextField, Button, Stack, Container } from "@mui/material";
import axios from "axios";
import isEmail from "is-email";

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
      method: "post",
      url: "https://v1.hitokoto.cn",
      data: {
        username: username,
        pwd: password,
      },
    }).then((res) => {
      console.log(res.data.msg);
    });
    console.log(username, password);
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
        <TextField
          error={usernameError}
          label="账号"
          color="secondary"
          onChange={handleusernameChange}
        />
        <TextField
          error={passwordError}
          label="密码"
          color="secondary"
          onChange={handlepasswordChange}
        />
        <Button onClick={handleClick}>登录</Button>
        <Button>没有账号？立即注册</Button>
        {hitokoto.length === 0 ? "null" : hitokoto}
      </Stack>
    </Container>
  );
}

export default Login;
