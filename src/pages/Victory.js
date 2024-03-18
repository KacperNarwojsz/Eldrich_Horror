import React from 'react';
import './AllPages.css';

const Victory = ({ reloadApp }) => {
  return (
    <div>
      <div className="victory-div">
        <h1 className="victory-text">WYGRANA</h1>
        <button className="victory-button" onClick={reloadApp}>
          Zagraj ponownie
        </button>
      </div>
    </div>
  );
};

export default Victory;
