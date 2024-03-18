import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosHB4 extends Component {
  constructor({ mythosHB4Done, characters, defeat }) {
    super();
    this.state = {
      counter: 8,
      mythosHB4Done: mythosHB4Done,
      characters: characters,
      defeat: defeat,
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
    if (this.state.counter < 8) {
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
            trigger={
              <figure className="mythos-front" id="MythosHB4">
                <button className="token-mythos-eldritch-faded">{this.state.counter}</button>
              </figure>
            }
            modal
            nested
          >
            {
              <div className="mythos-front-focus" id="MythosHB4">
                <button className="token-mythos-eldritch-faded" id="tokenMythosEldritchFadedFocusHB4">
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
                    {this.state.counter === 0 ? null : (
                      <button className="mythos-popup-close-button" onClick={() => close()}>
                        X
                      </button>
                    )}
                  </div>
                  <div className="mythos-popup-text-div">
                    <p className="mythos-popup-text">
                      Odrzuć z tej karty żetony Plugastwa <br></br>w liczbie równej połowie Bram na planszy.
                    </p>
                  </div>
                  <div className="mythos-popup-counter-div">
                    <button className="token-mythos-popup-counter">{this.state.counter}/8</button>
                    <div className="token-mythos-pop-up-counter-div">
                      <button className="token-mythos-popup-minus" onClick={this.counterDecrement}></button>
                      <button className="token-mythos-popup-eldritch"></button>
                      <button className="token-mythos-popup-plus" onClick={this.counterIncrement}></button>
                    </div>
                  </div>
                  <div className="mythos-popup-done-div">
                    {this.state.counter === 0 ? (
                      <p className="mythos-popup-text">
                        Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, <strong>badacze przegrywają</strong>.
                      </p>
                    ) : null}
                    {this.state.counter === 0 ? (
                      <button className="token-mythos-popup-defeat" onClick={this.state.defeat}>
                        PRZEGRANA
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosHB4Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosHB4;
