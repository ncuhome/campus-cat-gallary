import React from 'react';
import { TextField, Button } from '@material-ui/core'

function Login() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 300
    }}>
      <TextField label="Outlined secondary" color="secondary" focused />
      <Button>
        Login
      </Button>
    </div>
  );
}

export default Login;
