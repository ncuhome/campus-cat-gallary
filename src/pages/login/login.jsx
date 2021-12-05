import React from 'react';
import { TextField, Button } from '@material-ui/core'
import axios from 'axios';


function Login() {

  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');

  const[usernameError,setusernameError]=React.useState(false)
  const[passwordError,setpasswordError]=React.useState(false)

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleClick=()=>{
    if (username.length === 0){
      setusernameError(true)
      return
    }

    axios({
      method: 'post',
      url: '/user/12345',
      data: {
        username: username,
        password: password,
      }
    });
    console.log(username,password)
  }



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 250,
    }}>
      <TextField error={usernameError} label="账号" color="secondary" focused onChange={handleusernameChange}/>
      <TextField error={passwordError} label="密码" color="secondary" focused onChange={handlepasswordChange}/>
      <Button onClick={handleClick}>
        登录
      </Button>
      <Button>
        没有账号？立即注册
      </Button>
    </div>
  );
}

export default Login;
