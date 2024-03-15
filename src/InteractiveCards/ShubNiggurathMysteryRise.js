import React, { Component } from 'react';
import './InteractiveCards.css';

class ShubNiggurathMysteryRise extends Component {
  constructor({ shubNiggurathSlayed, characters, discardMysteryDeck }) {
    super();
    this.state = {
      shubNiggurathSlayed: shubNiggurathSlayed,
      monsterSlayed: false,
      characters: characters,
      discardMysteryDeck: discardMysteryDeck,
      counter: 0,
    };
  }

  counterIncrement = () => {
    if (this.state.counter < this.state.characters + 2 && this.state.discardMysteryDeck.length >= 3) {
      this.setState({ counter: this.state.counter + 1 });
    } else if (this.state.counter === this.state.characters + 2 && this.state.discardMysteryDeck.length >= 3) {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ monsterSlayed: true });
    }
  };

  counterDecrement = () => {
    if (this.state.counter !== 0 && this.state.discardMysteryDeck.length >= 3) {
      this.setState({ counter: this.state.counter - 1 });
      this.setState({ monsterSlayed: false });
    }
  };

  render() {
    return (
      <div className="ancient-mystery-front-div">
        <div>
          <div className="mystery-tokens-monster-div">
            <button
              className="mystery-monster"
              id={this.state.monsterSlayed ? 'TokenShubNiggurathSlayed' : 'TokenShubNiggurath'}
            ></button>
            <div className="mystery-tokens-monster">
              {this.state.counter === this.state.characters + 3 ? null : (
                <button className="token-mystery-killing"></button>
              )}
              {this.state.counter === this.state.characters + 3 ? (
                <button className="token-mystery-konster-done" onClick={this.state.shubNiggurathSlayed}></button>
              ) : null}
            </div>
          </div>
          <div className="mystery-monster-addons">
            <button className="mystery-monster-tokenMinus" onClick={this.counterDecrement}></button>
            <button className="mystery-monster-tokenHealth"></button>
            <button className="mystery-monster-counter">{`${this.state.counter}/${this.state.characters + 3}`}</button>
            <button className="mystery-monster-tokenPlus" onClick={this.counterIncrement}></button>
          </div>
        </div>
      </div>
    );
  }
}
export default ShubNiggurathMysteryRise;
