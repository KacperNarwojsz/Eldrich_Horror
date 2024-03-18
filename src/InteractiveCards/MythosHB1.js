import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosHB1 extends Component {
  constructor({ mythosHB1Done, characters }) {
    super();
    this.state = {
      characters: characters,
      counter: 0,
      mythosHB1Done: mythosHB1Done,
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

  counterIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
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
            trigger={
              <figure className="mythos-front" id="MythosHB1">
                <button className="token-mythos-health-faded">{this.state.counter}</button>
              </figure>
            }
            modal
            nested
          >
            {
              <div className="mythos-front-focus" id="MythosHB1">
                <button className="token-mythos-health-faded" id="tokenMythosHealthFadedFocusHB1">
                  {this.state.counter}
                </button>
              </div>
            }
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
                  <div className="mythos-popup-text-div" id="mythosPopUpTextDivOneliner">
                    <p className="mythos-popup-text">Umieść na tej karcie żeton Zdrowia.</p>
                  </div>
                  <div className="mythos-popup-counter-div">
                    <button className="token-mythos-popup-counter">{this.state.counter}</button>
                    <div className="token-mythos-popup-counter-div">
                      <button className="token-mythos-popup-minus" onClick={this.counterDecrement}></button>
                      <button className="token-mythos-popup-health" id="tokenMythosPopUpHealthHB1"></button>
                      <button className="token-mythos-popup-plus" onClick={this.counterIncrement}></button>
                    </div>
                  </div>
                  <div className="mythos-popup-text-div" id="mythosPopUpTextDivHB1">
                    <p className="mythos-popup-text">
                      Następnie każdy badacz traci <span className="mythos-popup-text-number">1</span> Zdrowia <br></br>
                      za każdy żeton Zdrowia na tej karcie.
                    </p>
                  </div>
                  <div className="mythos-popup-counter-case-div">
                    <button className="token-mythos-popup-health"></button>
                    <h1 className="token-mythos-popup-numbers-font">- {this.state.counter}</h1>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosHB1Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {this.state.characters - this.state.counter < 0 ? 0 : this.state.characters - this.state.counter}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosHB1;
