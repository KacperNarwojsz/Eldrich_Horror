import React from 'react';
import Popup from 'reactjs-popup';

const BackBoardPopup = ({ confirm }) => {
  return (
    <Popup
      contentStyle={{
        background: 'transparent',
        border: 'transparent',
      }}
      trigger={<button className="back-board-button"></button>}
      modal
      nested
    >
      {(close) => (
        <div className="defeat-popup">
          <p className="defeat-popup-text">Czy chcesz wrócić ?</p>
          <div className="defeat-choice-buttons">
            <button className="defeat-choice-button" onClick={confirm}>
              TAK
            </button>
            <button className="defeat-choice-button" onClick={close}>
              {/* close do przerobienia bez nawiasów */}
              NIE
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default BackBoardPopup;
