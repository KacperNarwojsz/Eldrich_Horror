import React from 'react';
import './AllPages.css';

const Defeat = ({ reloadApp }) => {
  return (
    <div>
      <div className="defeat-div">
        <h1 className="defeat-text">PORAŻKA</h1>
        <button className="defeat-button" onClick={reloadApp}>
          {' '}
          Zagraj <br></br>ponownie{' '}
        </button>
      </div>
    </div>
  );
};

export default Defeat;
