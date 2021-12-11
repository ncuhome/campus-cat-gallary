import React from "react";
import { TextField, Button, Stack, Container, Typography } from "@mui/material";
import axios from "axios";
import isEmail from "is-email";

import RegisterBackground from "../../image/login.png"


const backgroundStyle = {
  backgroundSize: "cover" ,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${RegisterBackground})`,
}


function Register() {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordrepeat, setpasswordrepeat] = React.useState("");
  const [usernameError, setusernameError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);

  const handleusernameChange = (event) => {
    const val = event.target.value;
    setusernameError(!isEmail(val));
    setusername(val);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const rehandlepasswordChange = (event) => {
    setpasswordrepeat(event.target.value);
  };

  const handleClick = () => {
    if (password !== passwordrepeat) {
      alert("密码不一致");
      return;
    }
    axios({
      method: "post",
      url: "47.103.210.124:7000/user/register",
      data: {
        username: username,
        pwd: password,
      },
    }).then((res) => {
      console.log(res.data.example);
      window.location.href = "/";
    });
  };

  return (
    <div style={backgroundStyle}>
    <Container>
      <Stack
        sx={{
          height: "100vh",
        }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ mb: 6 }}>
          校园猫咪录
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
          type="password"
          label="密码"
          color="primary"
          onChange={handlepasswordChange}
          sx={{
            width: "70%",
          }}
        />
        <TextField
          error={passwordError}
          type="password"
          label="确认密码"
          color="primary"
          onChange={rehandlepasswordChange}
          sx={{
            width: "70%",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{ width: "40%" }}
        >
          注册
        </Button>
      </Stack>
    </Container>
    </div>
  );
}

export default Register;
