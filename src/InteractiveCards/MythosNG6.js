import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosNG6 extends Component {
  constructor({ mythosNG6Done }) {
    super();
    this.state = {
      counter: 0,
      mythosNG6Done: mythosNG6Done,
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
            trigger={<figure className="mythos-front" id="MythosNG6"></figure>}
            modal
            nested
          >
            {<div className="mythos-front-focus" id="MythosNG6"></div>}
          </Popup>
        </div>
        <div className="mythos-tokens-div">
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosNG6Done}></button>
          ) : null}
          <button className="token-mythos-reckoning" onClick={this.doneButtonOnOff}></button>
        </div>
      </div>
    );
  }
}
export default MythosNG6;
