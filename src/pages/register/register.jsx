import React from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

function Register() {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordrepeat, setpasswordrepeat] = React.useState("");

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handlepasswordrepeatChange = (event) => {
    setpasswordrepeat(event.target.value);
  };

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
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 250,
      }}
    >
      <TextField
        label="邮箱"
        color="secondary"
        focused
        onChange={handleusernameChange}
      />
      <TextField
        type="password"
        label="密码"
        color="secondary"
        focused
        onChange={handlepasswordChange}
      />
      <TextField
        type="password"
        label="确认密码"
        color="secondary"
        focused
        onChange={handlepasswordrepeatChange}
      />
      <Button onClick={handleClick}>注册</Button>
    </div>
  );
}

export default Register;
