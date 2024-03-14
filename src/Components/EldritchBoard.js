import React from 'react';
import eldritch_board from '../pictures/Main/Eldritch_board.png';
import './Components.css';

const EldritchBoard = ({ children }) => {
  return (
    <div className="eldritch-board-div">
      <img src={eldritch_board} className="eldritch-board" alt="eldritch_board" />
      {children}
    </div>
  );
};

export default EldritchBoard;
