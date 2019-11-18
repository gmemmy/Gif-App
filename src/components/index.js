import React, { Component, Fragment } from 'react';
import './styles.css'
import axios from 'axios';
import apiKey from './config';

class UserInput extends Component {
  state = {
    userInput : '',
    response: []
  }
  onTextChange = (event) => {
    this.setState({ userInput: event.target.value })
    axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${this.state.userInput}`, {
    })
      .then(res => {
        this.setState({ response : res })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    return (
      <Fragment>
        <h1>Gif App</h1>
        <form className="form">
          <input className="input" placeholder="Input text here" type="text" 
            onChange={this.onTextChange} 
          />
        </form>
        <div>
          {this.state.response.data && (
              <img alt="gif" src={this.state.response.data.data.url} />
            )}
        </div>
      </Fragment>
    )
  }
}

export default UserInput;
