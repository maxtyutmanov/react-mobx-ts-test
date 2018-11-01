import { inject } from 'mobx-react';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

@inject('currentUserStore')
class App extends React.Component<any, any> {
  public render() {
    const isLoggedIn = this.props.currentUserStore.isLoggedIn;
    const currentUserName = this.props.currentUserStore.userName;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={isLoggedIn ? this.onLogOut : this.onLogIn} title={isLoggedIn ? "logout" : "login"} />
        <p>
          {isLoggedIn && <span>The current user is {currentUserName}</span>}
        </p>
      </div>
    );
  }

  private onLogOut() {
    this.props.currentUserStore.logIn('Max');
  }

  private onLogIn() {
    this.props.currentUserStore.logOut();
  }
}

export default App;
