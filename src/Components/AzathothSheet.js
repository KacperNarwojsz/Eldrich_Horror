import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css';

class AzathothSheet extends Component {
  constructor({ props, flipCardSheet }) {
    super(props);
    this.flipCardSheet = flipCardSheet;
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
            ></figure>
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
                <button className="sheet-card-defeat-button" onClick={this.props.defeat}>
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

export default AzathothSheet;
