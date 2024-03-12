import React from 'react';
import eldritch_logo from '../pictures/Main/Eldritch_logo.png';
import { ANCIENTS } from '../constants';
import './AllPages.css';

const Home = ({ chooseAncient }) => {
  return (
    <div className="home">
      <div>
        <img
          src={eldritch_logo}
          className="main_eldritch_logo"
          alt="eldritch_logo"
        />
      </div>
      <div>
        <h1 className="mainTitle">WYBIERZ PRZEDWIECZNEGO:</h1>
      </div>
      <div className="ancientsButtons">
        <button
          className="mainButton"
          id="ButtonAzathoth"
          onClick={() => chooseAncient(ANCIENTS.AZATHOTH)}
        >
          Azathoth
        </button>
        <button
          className="mainButton"
          id="ButtonYog"
          onClick={() => chooseAncient(ANCIENTS.YOGSOTHOTH)}
        >
          Yog-Sothoth
        </button>
        <button
          className="mainButton"
          id="ButtonShub"
          onClick={() => chooseAncient(ANCIENTS.SHUBNIGGURATH)}
        >
          Shub-Niggurath
        </button>
        <button
          className="mainButton"
          id="ButtonCthulhu"
          onClick={() => chooseAncient(ANCIENTS.CTHULHU)}
        >
          Cthulhu
        </button>
      </div>
    </div>
  );
};

export default Home;
