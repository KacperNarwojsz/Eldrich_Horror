import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosEB1 extends Component {
  constructor({ mythosEB1Done, characters }) {
    super();
    this.state = {
      characters: characters,
      counter: 4,
      mythosEB1Done: mythosEB1Done,
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
    if (this.state.counter < 4) {
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
              <figure className="mythos-front" id="MythosEB1">
                <button className="token-mythos-eldritch-faded">{this.state.counter}</button>
              </figure>
            }
            modal
            nested
          >
            {
              <div className="mythos-front-focus" id="MythosEB1">
                <button className="token-mythos-eldritch-faded" id="tokenMythosEldritchFadedFocusEB1">
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
                      Główny Badacz otrzymuje Stan <em>SZALEŃSTWO</em>, <br></br>a następnie za każdy posiadany Stan{' '}
                      <em>SZALEŃSTWO</em> odrzuca <span className="mythos-popup-text-number">1</span> żeton Plugastwa z
                      tej karty.
                    </p>
                  </div>
                  <div className="mythos-popup-counter-div">
                    <button className="token-mythos-popup-counter">{this.state.counter}/4</button>
                    <div className="token-mythos-popup-counter-div">
                      <button className="token-mythos-popup-minus" onClick={this.counterDecrement}></button>
                      <button className="token-mythos-popup-eldritch"></button>
                      <button className="token-mythos-popup-plus" onClick={this.counterIncrement}></button>
                    </div>
                  </div>
                  <div className="mythos-popup-done-div">
                    {this.state.counter === 0 ? (
                      <p className="mythos-popup-text">
                        Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, każdy badacz traci{' '}
                        <span className="mythos-popup-text-number">3</span> Poczytalności, a następnie ta{' '}
                        <em>POGŁOSKA</em> zostaje rozwiązana.
                      </p>
                    ) : null}
                    <div className="mythos-popup-done-case-div">
                      {this.state.counter === 0 ? <button className="token-mythos-popup-sanity"></button> : null}
                      {this.state.counter === 0 ? <h1 className="token-mythos-popup-numbers-font">-3</h1> : null}
                    </div>
                    {this.state.counter === 0 ? (
                      <button className="token-mythos-popup-done" onClick={this.state.mythosEB1Done}></button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosEB1Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosEB1;
