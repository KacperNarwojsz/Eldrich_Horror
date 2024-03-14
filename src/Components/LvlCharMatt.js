import React from 'react';
import lvl_char_matt from '../pictures/LvlChar/LvlCharMatt.png';
import './Components.css';

const LvlCharMatt = ({ children }) => {
  return (
    <div className="lvl-char-matt-div">
      <img src={lvl_char_matt} className="lvl-char-matt" alt="lvl_char_matt" />
      {children}
    </div>
  );
};

export default LvlCharMatt;
