import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosNG1 extends Component {
  constructor({ mythosNG1Done }) {
    super();
    this.state = {
      counter: 0,
      mythosNG1Done: mythosNG1Done,
      isTokenMythosDoneActive: false,
    };
  }

  doneButtonOnOff = () => {
    this.setState({ isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive });
  };

  counterIncrement = () => {
    if (this.state.counter !== this.state.characters) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  counterDecrement = () => {
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div className="mythos-front-div">
        <div>
          <Popup
            contentStyle={{ background: 'none', border: 'none' }}
            trigger={<figure className="mythos-front" id="MythosNG1"></figure>}
            modal
            nested
          >
            {<div className="mythos-front-focus" id="MythosNG1"></div>}
          </Popup>
        </div>
        <div className="mythos-tokens-div">
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosNG1Done}></button>
          ) : null}
          <button className="token-mythos-reckoning" onClick={this.doneButtonOnOff}></button>
        </div>
      </div>
    );
  }
}
export default MythosNG1;
