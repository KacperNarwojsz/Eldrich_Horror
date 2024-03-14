import React from 'react';
import eldritch_logo from '../pictures/Main/Eldritch_logo.png';
import { ANCIENTS } from '../constants';
import './AllPages.css';

// Czy da radę wygenerować te 4 przyciski przy pomocy Array.from ?

const Home = ({ chooseAncient }) => {
  return (
    <div className="home">
      <div>
        <img src={eldritch_logo} className="main-eldritch-logo" alt="eldritch_logo" />
      </div>
      <div>
        <h1 className="main-title">WYBIERZ PRZEDWIECZNEGO:</h1>
      </div>
      <div className="ancients-buttons">
        <button className="main-button" id="ButtonAzathoth" onClick={() => chooseAncient(ANCIENTS.AZATHOTH)}>
          Azathoth
        </button>
        <button className="main-button" id="ButtonYog" onClick={() => chooseAncient(ANCIENTS.YOGSOTHOTH)}>
          Yog-Sothoth
        </button>
        <button className="main-button" id="ButtonShub" onClick={() => chooseAncient(ANCIENTS.SHUBNIGGURATH)}>
          Shub-Niggurath
        </button>
        <button className="main-button" id="ButtonCthulhu" onClick={() => chooseAncient(ANCIENTS.CTHULHU)}>
          Cthulhu
        </button>
      </div>
    </div>
  );
};

export default Home;
