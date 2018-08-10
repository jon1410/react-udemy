import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
      username: 'username',
      inputText: ''
  }

  changeUsernameHandler = (event) => {
      this.setState({username: event.target.value})
  }

  showLengthHandler = (event) => {
    let newInput = event.target.value;
    let newTextLength = newInput.length;
    this.setState({inputText: newInput, textLength: newTextLength})
  }

  deleteCharHandler = (strIndex) => {
    const charInput = this.state.inputText.split('');
    charInput.splice(strIndex, 1);
    const updatedText = charInput.join('');
    this.setState({inputText: updatedText})
  }

  render() {
    let charComponent = null;
    let currentInput = this.state.inputText;

    charComponent = currentInput.split('').map((c, index) => {
        return <Char charValue={c}
                     deleteChar={() => this.deleteCharHandler(index)}
                     key={index}/>
    })

    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />

        <input type="text" onChange={this.showLengthHandler} value={this.state.inputText}/>
        <p>Length of Inputtext: {this.state.inputText.length}</p>
        <Validation textLength={this.state.inputText.length}/>
        {charComponent}

      </div>
    );
  }
}

export default App;
