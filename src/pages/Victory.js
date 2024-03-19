import React from 'react';
import './AllPages.css';

const Victory = ({ reloadApp }) => {
  return (
    <div>
      <div className="victory-div">
        <p className="victory-text">WYGRANA</p>
        <button className="victory-button" onClick={reloadApp}>
          Zagraj ponownie
        </button>
      </div>
    </div>
  );
};

export default Victory;
