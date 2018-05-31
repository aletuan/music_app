import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { client } from '../Client';

class Login extends Component {
  state = {
    loginInProgress: false,
    shouldRedirect: false,
  };

  performLogin = () => {
    console.log('perform login');
    this.setState({ loginInProgress: true });
    client.login().then(() => (
      this.setState({ shouldRedirect: true })
    ));
  };

  render() {
    console.log('render in login');
    if (this.state.shouldRedirect) {
      console.log('should redirect to another page');
      return (
        <Redirect to='/albums' />
      );
    } else {
      console.log('render in login page');
      return (
        <div className='ui one column centered grid'>
          <div className='ten wide column'>
            <div
              className='ui raised very padded text container segment'
              style={{ textAlign: 'center' }}
            >
              <h2 className='ui green header'>
                Fullstack Music
              </h2>
              {
                this.state.loginInProgress ? (
                  <div className='ui active centered inline loader' />
                ) : (
                  <div
                    className='ui large green submit button'
                    onClick={this.performLogin}
                  >
                    Login
                  </div>
                )
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
