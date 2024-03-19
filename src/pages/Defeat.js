import React from 'react';
import './AllPages.css';

const Defeat = ({ reloadApp }) => {
  return (
    <div>
      <div className="defeat-div">
        <p className="defeat-text">PORAŻKA</p>
        <button className="defeat-button" onClick={reloadApp}>
          Zagraj <br></br>ponownie
        </button>
      </div>
    </div>
  );
};

export default Defeat;
