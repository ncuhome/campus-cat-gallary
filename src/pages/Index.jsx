import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/login.jsx'
import Home from './Home/home.jsx'
import { ToastContainer} from 'react-toastify';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 单一匹配，提高路由效率 */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          {/* 重定向 */}
          <Redirect to="/login" />
        </Switch>

        {/* toast 设置*/}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    )
  }
}
