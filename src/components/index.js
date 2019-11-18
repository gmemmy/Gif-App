import React, { Component, Fragment } from 'react';
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
        console.log(this.state.response);
      })
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    return (
      <Fragment>
        <form>
          <input type="text" onChange={this.onTextChange} />
        </form>
        <div>
          {/* <img alt="no gif" /> */}
          {this.state.response >= 1 && (
              <img alt="gif" />
            )}
        </div>
      </Fragment>
    )
  }
}

export default UserInput;
