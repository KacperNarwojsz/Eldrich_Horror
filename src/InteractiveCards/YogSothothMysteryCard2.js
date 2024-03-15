import React from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

const YogSothothMysteryCard2 = ({
  characters,
  mysteryDecrement,
  mysteryCounter,
  mysteryIncrementFull,
  mysteryDeck,
  victory,
  ancientCardFlipped,
  mysteryDone,
}) => {
  return (
    <div className="ancient-mystery-front-div">
      <Popup
        contentStyle={{ background: 'none', border: 'none' }}
        trigger={<figure className="ancient-mystery-front" id="YogSothothMysteryFront2"></figure>}
        modal
        nested
      >
        {<div className="ancient-mystery-front-focus" id="YogSothothMysteryFront2"></div>}
      </Popup>
      <div className="mystery-tokens-div">
        <div className="mystery-counter">
          <button className="token-mystery-minus" onClick={mysteryDecrement}></button>
          <button className="token-mystery-clue"></button>
          <button className="token-mystery-mlus" onClick={mysteryIncrementFull}></button>
        </div>
        {mysteryCounter !== characters ? (
          <button className="token-mystery-counter">{`${mysteryCounter}/${characters}`}</button>
        ) : null}
        {mysteryCounter === characters ? (
          mysteryDeck.length === 0 && !ancientCardFlipped ? (
            <Popup
              contentStyle={{ background: 'transparent', border: 'transparent' }}
              trigger={<button className="token-mystery-done"></button>}
              modal
              nested
            >
              {(close) => (
                <div className="defeat-popup">
                  <h1 className="winning-popup-text">Czy została zakończona Faza Mitów ?</h1>
                  <div className="defeat-choice-buttons">
                    <button className="defeat-choice-button" onClick={victory}>
                      TAK
                    </button>
                    <button className="defeat-choice-button" onClick={() => close()}>
                      NIE
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          ) : (
            <button className="token-mystery-done" onClick={mysteryDone}></button>
          )
        ) : null}
      </div>
    </div>
  );
};
export default YogSothothMysteryCard2;
