import React from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

const YogSothothMysteryCard3 = ({
  characters,
  mysteryDecrement,
  mysteryCounter,
  mysteryIncrementHalf,
  mysteryDeck,
  victory,
  ancientCardFlipped,
  mysteryDone,
}) => {
  return (
    <div className="ancient-mystery-front-div">
      <Popup
        contentStyle={{ background: 'none', border: 'none' }}
        trigger={<figure className="ancient-mystery-front" id="YogSothothMysteryFront3"></figure>}
        modal
        nested
      >
        {<div className="ancient-mystery-front-focus" id="YogSothothMysteryFront3"></div>}
      </Popup>
      <div className="mystery-tokens-div">
        <div className="mystery-counter">
          <button className="token-mystery-minus" onClick={mysteryDecrement}></button>
          <button className="token-mystery-gate"></button>
          <button className="token-mystery-plus" onClick={mysteryIncrementHalf}></button>
        </div>
        {mysteryCounter !== Math.ceil(characters / 2) ? (
          <button className="token-mystery-counter">{`${mysteryCounter}/${Math.ceil(characters / 2)}`}</button>
        ) : null}
        {mysteryCounter === Math.ceil(characters / 2) ? (
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
export default YogSothothMysteryCard3;
