import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css';

class CthulhuSheet extends Component {
  constructor({ props, flipCardSheet, sheetCardCthulhuCounterDecrement, sheetCardCthulhuCounterIncrement }) {
    super(props);
    this.flipCardSheet = flipCardSheet;
    this.sheetCardCthulhuCounterDecrement = sheetCardCthulhuCounterDecrement;
    this.sheetCardCthulhuCounterIncrement = sheetCardCthulhuCounterIncrement;
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
                <button className="sheet-card-sanity-counter">{this.props.sheetCardCthulhuCounter}</button>
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
                <div className="sheet-card-addons" id="sheetCardCthulhuAddonsFocus">
                  <button
                    className="sheet-card-token-minus"
                    id="sheetCardTokenMinusFocus"
                    onClick={this.sheetCardCthulhuCounterDecrement}
                  ></button>
                  <button className="sheet-card-sanity" id="sheetCardSanityFocus"></button>
                  <button className="sheet-card-counter" id="sheetCardCthulhuCounterFocus">
                    {this.props.sheetCardCthulhuCounter}
                  </button>
                  <button
                    className="sheet-card-token-plus"
                    id="sheetCardTokenPlusFocus"
                    onClick={this.sheetCardCthulhuCounterIncrement}
                  ></button>
                </div>
              ) : null}
            </div>
          }
        </Popup>
      </>
    );
  }
}

export default CthulhuSheet;
