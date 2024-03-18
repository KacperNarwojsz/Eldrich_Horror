import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosNB1 extends Component {
  constructor({ mythosNB1Done, characters }) {
    super();
    this.state = {
      characters: characters,
      mythosNB1Done: mythosNB1Done,
      isTokenMythosDoneActive: false,
      reckoning: false,
    };
  }

  doneButtonOnOff = () => {
    this.setState({ isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive });
  };

  reckoningButton = () => {
    this.setState({ reckoning: !this.state.reckoning });
  };

  render() {
    return (
      <div className="mythos-front-div">
        <div>
          <Popup
            contentStyle={{ background: 'none', border: 'none' }}
            trigger={<figure className="mythos-front" id="MythosNB1"></figure>}
            modal
            nested
          >
            {<div className="mythos-front-focus" id="MythosNB1"></div>}
          </Popup>
        </div>
        <div className="mythos-tokens-div">
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={<button className="token-mythos-reckoning" onClick={this.reckoningButton}></button>}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-mythos">
                <div className="mythos-popup-matt-blue">
                  <div className="mythos-popup-close-button-div">
                    <button className="mythos-popup-close-button" onClick={() => close()}>
                      X
                    </button>
                  </div>
                  <div className="mythos-popup-text-div" id="mythosPopUpTextDivNB1">
                    <p className="mythos-popup-text">
                      Zagłada postępuje o <span className="mythosPopUpTextNumber">1</span>.
                    </p>
                  </div>
                  <div className="mythos-popup-text-case-div">
                    <button className="token-mythos-popup-doom"></button>
                    <h1 className="token-mythos-popup-numbers-font">-1</h1>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosNB1Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosNB1;
