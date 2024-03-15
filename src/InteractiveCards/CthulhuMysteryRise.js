import React, { Component } from 'react';
import './InteractiveCards.css';

class CthulhuMysteryRise extends Component {
  constructor({ cthulhuSlayed, characters }) {
    super();
    this.state = {
      cthulhuSlayed: cthulhuSlayed,
      monsterSlayed: false,
      characters: characters,
      counter: 0,
    };
  }

  counterIncrement = () => {
    if (this.state.counter < this.state.characters + 2) {
      this.setState({ counter: this.state.counter + 1 });
    } else if (this.state.counter === this.state.characters + 2) {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ monsterSlayed: true });
    }
  };

  counterDecrement = () => {
    if (this.state.counter !== 0) {
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
              id={this.state.monsterSlayed ? 'TokenCthulhuSlayed' : 'TokenCthulhu'}
            ></button>
            <div className="mystery-tokens-monster">
              {this.state.counter === this.state.characters + 3 ? null : (
                <button className="token-mystery-killing"></button>
              )}
              {this.state.counter === this.state.characters + 3 ? (
                <button className="token-mystery-monster-done" onClick={this.state.cthulhuSlayed}></button>
              ) : null}
            </div>
          </div>
          <div className="mystery-monster-addons">
            <button className="mystery-monster-token-minus" onClick={this.counterDecrement}></button>
            <button className="mystery-monster-token-health"></button>
            <button className="mystery-monster-counter">{`${this.state.counter}/${this.state.characters + 3}`}</button>
            <button className="mystery-monster-token-plus" onClick={this.counterIncrement}></button>
          </div>
        </div>
      </div>
    );
  }
}
export default CthulhuMysteryRise;
