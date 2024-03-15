import React from 'react';
import Popup from 'reactjs-popup';
import './InteractiveCards.css';

const CthulhuMysteryCard4 = ({
  characters,
  mysteryDecrementMonster,
  mysteryCounter,
  mysteryIncrementMonster,
  monsterSlayed,
  mysteryDeck,
  victory,
  ancientCardFlipped,
  mysteryDone,
}) => {
  return (
    <div className="ancient-mystery-front-div">
      <Popup
        contentStyle={{ background: 'none', border: 'none' }}
        trigger={<figure className="ancient-mystery-front" id="CthulhuMysteryFront4"></figure>}
        modal
        nested
      >
        {<div className="ancient-mystery-front-focus" id="CthulhuMysteryFront4"></div>}
      </Popup>
      <div>
        <div className="mystery-tokens-monster-div">
          <button className="mystery-monster" id={monsterSlayed ? 'TokenCthyllaSlayed' : 'TokenCthylla'}></button>
          <div className="mystery-tokens-monster">
            {mysteryCounter === characters + 2 ? null : <button className="token-mystery-killing"></button>}
            {mysteryCounter === characters + 2 ? (
              mysteryDeck.length === 0 && !ancientCardFlipped ? (
                <Popup
                  contentStyle={{ background: 'transparent', border: 'transparent' }}
                  trigger={<button className="token-mystery-monster-done"></button>}
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
                <button className="token-mystery-monster-done" onClick={mysteryDone}></button>
              )
            ) : null}
          </div>
        </div>
        <div className="mystery-monster-addons">
          <button className="mystery-monster-token-minus" onClick={mysteryDecrementMonster}></button>
          <button className="mystery-monster-token-health"></button>
          <button className="mystery-monster-counter">{`${mysteryCounter}/${characters + 2}`}</button>
          <button className="mystery-monster-token-plus" onClick={mysteryIncrementMonster}></button>
        </div>
      </div>
    </div>
  );
};
export default CthulhuMysteryCard4;
