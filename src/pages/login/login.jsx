import React from 'react';
import { TextField, Button } from '@material-ui/core'

function Login() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 250,
    }}>
      <TextField label="账号" color="secondary" focused />
      <TextField label="密码" color="secondary" focused />
      <Button>
        登录
      </Button>
      <Button>
        没有账号？立即注册
      </Button>
    </div>
  );
}

export default Login;
