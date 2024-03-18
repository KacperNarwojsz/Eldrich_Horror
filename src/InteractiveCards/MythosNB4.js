import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosNB4 extends Component {
  constructor({ mythosNB4Done, characters }) {
    super();
    this.state = {
      characters: characters,
      counter: 4,
      mythosNB4Done: mythosNB4Done,
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
              <figure className="mythos-front" id="MythosNB4">
                <button className="token-mythos-eldritch-faded">{this.state.counter}</button>
              </figure>
            }
            modal
            nested
          >
            {
              <div className="mythos-front-focus" id="MythosNB4">
                <button className="token-mythos-eldritch-faded" id="tokenMythosEldritchFadedFocusNB4">
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
                  <div className="mythos-popup-text-div" id="mythosPopUpTextDivNB4">
                    <p className="mythos-popup-text">
                      Wyszukaj w talii Zasobów, stosie kart odrzuconych <br></br>i rezerwach wszystkie Zasoby o wartości
                      równej lub wyższej od liczby żetonów Plugastwa na tej karcie <br></br>i odłóż je do pudełka.
                      Następnie odrzuć z tej karty <br></br>
                      <span className="mythos-popup-text-number">1</span> żeton Plugastwa.
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
                        Jeśli na tej karcie nie ma żadnego żetonu Plugastwa, <br></br>ta <em>POGŁOSKA</em> zostaje
                        rozwiązana.
                      </p>
                    ) : null}
                    {this.state.counter === 0 ? (
                      <button className="token-mythos-popup-done" onClick={this.state.mythosNB4Done}></button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Popup>
          {this.state.isTokenMythosDoneActive ? (
            <button className="token-mythos-done" onClick={this.state.mythosNB4Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosNB4;
