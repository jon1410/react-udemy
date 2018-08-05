import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
      username: 'username'
  }

  changeUsernameHandler = (event) => {
      this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
