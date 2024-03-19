import React from 'react';
import Popup from 'reactjs-popup';

const SurrenderButton = ({ confirm }) => {
  return (
    <Popup
      contentStyle={{
        background: 'transparent',
        border: 'transparent',
      }}
      trigger={<button className="surrender-button"></button>}
      modal
      nested
    >
      {(close) => (
        <div className="defeat-popup">
          <p className="defeat-popup-text">Czy chcesz poddać grę?</p>
          <div className="defeat-choice-buttons">
            <button className="defeat-choice-button" onClick={confirm}>
              TAK
            </button>
            <button className="defeat-choice-button" onClick={() => close()}>
              NIE
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default SurrenderButton;
