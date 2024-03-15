import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css';

class YogSothothSheet extends Component {
  constructor({
    props,
    characters,
    flipCardSheet,
    sheetCardYogSothothGateCounterDecrement,
    sheetCardYogSothothGateCounterIncrement,
    sheetCardYogSothothEldritchCounterDecrement,
    sheetCardYogSothothEldritchCounterIncrement,
  }) {
    super(props);
    this.characters = characters;
    this.flipCardSheet = flipCardSheet;
    this.sheetCardYogSothothGateCounterDecrement = sheetCardYogSothothGateCounterDecrement;
    this.sheetCardYogSothothGateCounterIncrement = sheetCardYogSothothGateCounterIncrement;
    this.sheetCardYogSothothEldritchCounterDecrement = sheetCardYogSothothEldritchCounterDecrement;
    this.sheetCardYogSothothEldritchCounterIncrement = sheetCardYogSothothEldritchCounterIncrement;
  }

  render() {
    return (
      <>
        <Popup
          contentStyle={{ background: 'none', border: 'none' }}
          trigger={
            <figure
              className={this.props.isLoadDone ? 'ancient-sheet' : 'ancient-sheet-stamp'}
              id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}
              tabIndex="0"
            >
              {this.props.ancientCardFlipped ? (
                <div className="sheet-card-counter-div">
                  <button className="sheet-card-eldritch-counter">
                    {this.props.sheetCardYogSothothEldritchCounter}
                  </button>
                  <button className="sheet-card-gate-counter">{this.props.sheetCardYogSothothGateCounter}</button>
                </div>
              ) : null}
            </figure>
          }
          modal
          nested
        >
          {
            <div
              className="ancient-sheet-focus"
              id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}
            >
              {!this.props.ancientCardFlipped ? (
                <button className="flip-button" id="flipButtonFrontFocus" onClick={this.flipCardSheet}></button>
              ) : null}
              {this.props.ancientCardFlipped ? (
                <button className="flip-button" id="flipButtonBackFocus" onClick={this.flipCardSheet}></button>
              ) : null}
              {this.props.ancientCardFlipped ? (
                <div className="sheet-card-addons" id="sheetCardYogSothothAddonsFocus">
                  <button
                    className="sheet-card-token-minus"
                    id="sheetCardTokenMinusFocus"
                    onClick={this.sheetCardYogSothothEldritchCounterDecrement}
                  ></button>
                  <button className="sheet-card-eldritch" id="sheetCardEldritchFocus"></button>
                  <button className="sheet-card-counter" id="sheetCardYogSothothCounterFocus">
                    {this.props.sheetCardYogSothothEldritchCounter}/{Math.ceil(this.characters / 2)}
                  </button>
                  <button
                    className="sheet-card-token-plus"
                    id="sheetCardYogSothothTokenPlusFocus"
                    onClick={this.sheetCardYogSothothEldritchCounterIncrement}
                  ></button>
                </div>
              ) : null}
              {this.props.ancientCardFlipped ? (
                <div className="sheet-card-addons" id="sheetCardYogSothothAddonsFocus">
                  <button
                    className="sheet-card-token-minus"
                    id="sheetCardTokenMinusFocus"
                    onClick={this.sheetCardYogSothothGateCounterDecrement}
                  ></button>
                  <button className="sheet-card-gate" id="sheetCardGateFocus"></button>
                  <button className="sheet-card-counter" id="sheetCardYogSothothCounterFocus">
                    {this.props.sheetCardYogSothothGateCounter}/3
                  </button>
                  <button
                    className="sheet-card-token-plus"
                    id="sheetCardYogSothothTokenPlusFocus"
                    onClick={this.sheetCardYogSothothGateCounterIncrement}
                  ></button>
                </div>
              ) : null}
              {this.props.ancientCardFlipped &&
              this.props.sheetCardYogSothothEldritchCounter === Math.ceil(this.characters / 2) ? (
                <button
                  className="sheet-card-defeat-button"
                  id="sheetCardYogSothothButton"
                  onClick={this.props.victory}
                >
                  WYGRANA
                </button>
              ) : null}
              {this.props.ancientCardFlipped && this.props.sheetCardYogSothothGateCounter >= 3 ? (
                <button className="sheet-card-defeat-button" id="sheetCardYogSothothButton" onClick={this.props.defeat}>
                  PRZEGRANA
                </button>
              ) : null}
            </div>
          }
        </Popup>
      </>
    );
  }
}

export default YogSothothSheet;
