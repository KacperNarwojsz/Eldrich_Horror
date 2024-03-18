import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosNB2 extends Component {
  constructor({ mythosNB2Done, characters }) {
    super();
    this.state = {
      characters: characters,
      monsterToughnessCounter: 0,
      monsterCounter: 0,
      mythosNB2Done: mythosNB2Done,
      isTokenMythosDoneActive: false,
      reckoning: false,
    };
  }

  reckoningButton = () => {
    this.setState({ reckoning: !this.state.reckoning });
  };

  monsterCounterIncrement = () => {
    if (this.state.monsterCounter < 4) {
      this.setState({ monsterCounter: this.state.monsterCounter + 1 });
    }
  };

  monsterCounterDecrement = () => {
    if (this.state.monsterCounter !== 0) {
      this.setState({ monsterCounter: this.state.monsterCounter - 1 });
    }
  };

  monsterToughnessCounterIncrement = () => {
    this.setState({ monsterToughnessCounter: this.state.monsterToughnessCounter + 1 });
  };

  monsterToughnessCounterDecrement = () => {
    if (this.state.monsterToughnessCounter !== 0) {
      this.setState({ monsterToughnessCounter: this.state.monsterToughnessCounter - 1 });
    }
  };

  render() {
    return (
      <div className="mythos-front-div">
        <div>
          <Popup
            contentStyle={{ background: 'none', border: 'none' }}
            trigger={
              <figure className="mythos-front" id="MythosNB2">
                <button className="token-mythos-monster-toughness-faded">{this.state.monsterToughnessCounter}</button>
              </figure>
            }
            modal
            nested
          >
            {
              <div className="mythos-front-focus" id="MythosNB2">
                <button className="token-mythos-monster-toughness-faded" id="tokenMythosMonsterToughnessFadedFocusNB2">
                  {this.state.monsterToughnessCounter}
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
                    {this.state.monsterCounter === 4 ? null : (
                      <button className="mythos-popup-close-button" onClick={() => close()}>
                        X
                      </button>
                    )}
                  </div>
                  <div className="mythos-popup-text-div">
                    <p className="mythos-popup-text">
                      Rozmnóż <span className="mythos-popup-text-number">1</span> Potwora na polu "
                      <span className="mythos-popup-text-number">19</span>". <br></br> <br></br>Liczba Potworów na polu
                      "<span className="mythos-popup-text-number">19</span>":
                    </p>
                  </div>
                  <div className="mythos-popup-counter-div">
                    <button className="token-mythos-popup-counter">{this.state.monsterCounter}/4</button>
                    <div className="token-mythos-popup-counter-div">
                      <button className="token-mythos-popup-minus" onClick={this.monsterCounterDecrement}></button>
                      <button className="token-mythos-popup-monster-surge"></button>
                      <button className="token-mythos-popup-plus" onClick={this.monsterCounterIncrement}></button>
                    </div>
                  </div>
                  <div className="mythos-popup-done-div">
                    {this.state.monsterCounter === 4 ? (
                      <p className="mythos-popup-text">
                        Jeśli na polu "<span className="mythos-popup-text-number">19</span>" znajdują się{' '}
                        <span className="mythos-popup-text-number">4</span> lub więcej Potworów, żeton na torze Zagłady
                        przesuwa się na pole <span className="mythos-popup-text-number">0</span>, <br></br>a następnie
                        ta <em>POGŁOSKA</em> zostaje rozwiązana.
                      </p>
                    ) : null}
                    <div className="mythos-popup-done-case-div">
                      {this.state.monsterCounter === 4 ? <button className="token-mythos-popup-doom"></button> : null}
                      {this.state.monsterCounter === 4 ? (
                        <h1 className="token-mythos-popup-numbers-font"> = 0</h1>
                      ) : null}
                    </div>
                    {this.state.monsterCounter === 4 ? (
                      <button className="token-mythos-popup-done" onClick={this.state.mythosNB2Done}></button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              <button className="token-mythos-clue-faded" onClick={this.reckoningButton}>
                1
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-mythos">
                <div className="mythos-popup-matt-blue">
                  <div className="mythos-popup-close-button-div">
                    {this.state.monsterToughnessCounter >= this.state.characters ? null : (
                      <button className="mythos-popup-close-button" onClick={() => close()}>
                        X
                      </button>
                    )}
                  </div>
                  <div className="mythos-popup-text-div" id="mythosPopUpTextDivOneliner">
                    <p className="mythos-popup-text">Wytrzymałość potworów:</p>
                  </div>
                  <div className="mythos-popup-counter-div">
                    <button className="token-mythos-popup-counter">
                      {this.state.monsterToughnessCounter}/{this.state.characters}
                    </button>
                    <div className="token-mythos-popup-counter-div">
                      <button
                        className="token-mythos-popup-minus"
                        onClick={this.monsterToughnessCounterDecrement}
                      ></button>
                      <button className="token-mythos-popup-monster-toughness"></button>
                      <button
                        className="token-mythos-popup-plus"
                        onClick={this.monsterToughnessCounterIncrement}
                      ></button>
                    </div>
                  </div>
                  <div className="mythos-popup-done-div">
                    {this.state.monsterToughnessCounter >= this.state.characters ? (
                      <p className="mythos-popup-text">
                        Jeśli łączna wytrzymałość Potworów <br></br>na tej karcie jest równa lub większa od{' '}
                        <span className="mythos-popup-text-icons">h</span>, <br></br>ta <em>POGŁOSKA</em> zostaje
                        rozwiązana.
                      </p>
                    ) : null}
                    {this.state.monsterToughnessCounter >= this.state.characters ? (
                      <button className="token-mythos-popup-done" onClick={this.state.mythosNB2Done}></button>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    );
  }
}
export default MythosNB2;
