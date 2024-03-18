import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

class MythosEB3 extends Component {
  constructor({ mythosEB3Done, characters, removeExpedition, defeat }) {
    super();
    this.removeExpedition = removeExpedition;
    this.state = {
      mythosEB3Done: mythosEB3Done,
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

  render() {
    return (
      <div className="mythos-front-div">
        <div>
          <Popup
            contentStyle={{ background: 'none', border: 'none' }}
            trigger={<figure className="mythos-front" id="MythosEB3"></figure>}
            modal
            nested
          >
            {<div className="mythos-front-focus" id="MythosEB3"></div>}
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
                    {this.props.deletedDeckReverseExpedition.length > 5 ? null : (
                      <button className="mythos-popup-close-button" onClick={() => close()}>
                        X
                      </button>
                    )}
                  </div>
                  <div className="mythos-popup-text-div">
                    <p className="mythos-popup-text">
                      Wyszukaj z talii Spotkań Ekspedycyjnych<br></br> wszystkie karty pasujące do Aktywnej Ekspedycji
                      <br></br> i odłóż je do pudełka.
                    </p>
                  </div>
                  <button className="token-mythos-popup-expedition-button" onClick={this.removeExpedition}>
                    Usuń aktywną ekspedycję
                  </button>
                  <div className="mythos-popup-expeditions">
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionAntarctica${
                        this.props.deletedAntarctica ? 'CrossedOut' : 'Small'
                      }`}
                    ></figure>
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionTheAmazon${this.props.deletedTheAmazon ? 'CrossedOut' : 'Small'}`}
                    ></figure>
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionTheHeartofAfrica${
                        this.props.deletedTheHeartofAfrica ? 'CrossedOut' : 'Small'
                      }`}
                    ></figure>
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionTheHimalayas${
                        this.props.deletedTheHimalayas ? 'CrossedOut' : 'Small'
                      }`}
                    ></figure>
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionThePyramids${
                        this.props.deletedThePyramids ? 'CrossedOut' : 'Small'
                      }`}
                    ></figure>
                    <figure
                      className="token-mythos-popup-expedition-small"
                      id={`tokenMythosPopUpExpeditionTunguska${this.props.deletedTunguska ? 'CrossedOut' : 'Small'}`}
                    ></figure>
                  </div>
                  <div className="mythos-popup-done-div">
                    {this.props.deletedDeckReverseExpedition.length > 5 ? (
                      <p className="mythos-popup-text">
                        Jeśli talia Spotkań Ekspedycyjnych jest pusta,<br></br> <strong>badacze przegrywają</strong>.
                      </p>
                    ) : null}
                    {this.props.deletedDeckReverseExpedition.length > 5 ? (
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
            <button className="token-mythos-done" onClick={this.state.mythosEB3Done}></button>
          ) : null}
          <button className="token-mythos-clue-faded" onClick={this.doneButtonOnOff}>
            {Math.ceil(this.state.characters / 2)}
          </button>
        </div>
      </div>
    );
  }
}
export default MythosEB3;
