import React from "react";
import { TextField, Button } from "@material-ui/core";
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 250,
      }}
    >
      <TextField
        label="账号"
        color="secondary"
        focused
        onChange={handleusernameChange}
      />
      <TextField
        label="密码"
        color="secondary"
        focused
        onChange={handlepasswordChange}
      />
      <TextField
        label="确认密码"
        color="secondary"
        focused
        onChange={handlepasswordrepeatChange}
      />
      <Button>
        提交
      </Button>
    </div>
  );
}

export default Register;
