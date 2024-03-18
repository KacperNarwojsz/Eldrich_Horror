import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosHB3 extends Component {
  constructor({ mythosHB3Done, characters }) {
    super();
    this.state = {
      characters: characters,
      mythosHB3Done: mythosHB3Done,
      isTokenMythosDoneActive: false,
    };
  }

  doneButtonOnOff = () => {
    this.setState({ isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive });
  };

  render() {
    return (
      <div className="mythos-front-div">
        <div>
          <Popup
            contentStyle={{ background: 'none', border: 'none' }}
            trigger={<figure className="mythos-front" id="MythosHB3"></figure>}
            modal
            nested
          >
            {<div className="mythos-front-focus" id="MythosHB3"></div>}
          </Popup>
        </div>
        <div className="mythos-tokens-div">
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosHB3Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosHB3;
