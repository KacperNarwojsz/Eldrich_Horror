import React from 'react';
import LvlCharMatt from '../Components/LvlCharMatt';
import char_icon from '../pictures/LvlChar/CharIcon.png';
import lvl_icon from '../pictures/LvlChar/LvlIcon.png';
import CharacterButtonsList from '../Components/CharacterButtonsList';
import LevelButtonsList from '../Components/LevelButtonsList';
import './AllPages.css';

//TO DO:

// DONE:
// disable button dopóki nie spełnione oba warunki
// cursor pointer na disable zmnienic na not-allowed

const AncientLvlChar = ({ ancient, loadAncient, loadHome, level, characters, setLvl, setCharacters }) => {
  return (
    <div className="ancient-lvl-char" id={`${ancient}`}>
      <LvlCharMatt>
        <div className="top-div">
          <div className="lvl-div">
            <p className="lvl-char-text">POZIOM</p>
            <div className="lvl-back-div">
              <button className="back-lvl-char-button" onClick={loadHome}></button>
              <img src={lvl_icon} className="lvl-char-icon" alt="lvl_icon" />
            </div>
            <div className="lvl-buttons-div">
              <LevelButtonsList level={level} setLvl={setLvl} />
              <p className="lvl-char-text">LICZBA GRACZY</p>
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <div className="char-div">
            <img src={char_icon} className="lvl-char-icon" alt="char_icon" />
            <div className="char-buttons-div">
              <CharacterButtonsList characters={characters} setCharacters={setCharacters} />
            </div>
            <button disabled={!characters || !level} className="start-button" onClick={loadAncient}>
              ROZPOCZNIJ
            </button>
          </div>
        </div>
      </LvlCharMatt>
    </div>
  );
};
export default AncientLvlChar;
