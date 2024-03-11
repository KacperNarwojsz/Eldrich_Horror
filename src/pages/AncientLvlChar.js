import React from "react";
import LvlCharMatt from "../Components/LvlCharMatt";
import char_icon from "../pictures/LvlChar/CharIcon.png";
import lvl_icon from "../pictures/LvlChar/LvlIcon.png";
import CharacterButtonsList from "../Components/CharacterButtonsList";
import "./AllPages.css";

// disable button dopóki nie spełnione oba warunki
// cursor pointer na disable zmnienic na not-allowed


const AncientLvlChar = ({
  ancient,
  loadAncientOne,
  loadHome,
  level,
  characters,
  chooseLvlEasy,
  chooseLvlNormal,
  chooseLvlHard,
  setCharacters,
}) => {
  return (
    <div className="ancientLvlChar" id={`${ancient}`}>
      <LvlCharMatt>
        <div className="topDiv">
          <div className="lvlDiv">
            <h1 className="lvlCharText">POZIOM</h1>
            <div className="lvlBackDiv">
              <button className="backLvlCharButton" onClick={loadHome}></button>
              <img src={lvl_icon} className="lvl_char_icon" alt="lvl_icon" />
            </div>
            <div className="lvlButtonsDiv">
              <button
                className={level === "Easy" ? "lvlButtonActive" : "lvlButton"}
                onClick={chooseLvlEasy}
              >
                ŁATWY
              </button>
              <br></br>
              <button
                className={level === "Normal" ? "lvlButtonActive" : "lvlButton"}
                onClick={chooseLvlNormal}
              >
                NORMALNY
              </button>
              <br></br>
              <button
                className={level === "Hard" ? "lvlButtonActive" : "lvlButton"}
                onClick={chooseLvlHard}
              >
                TRUDNY
              </button>
              <h1 className="lvlCharText">LICZBA GRACZY</h1>
            </div>
          </div>
        </div>
        <div className="bottomDiv">
          <div className="charDiv">
            <img src={char_icon} className="lvl_char_icon" alt="char_icon" />
            <div className="charButtonsDiv">
              <CharacterButtonsList
                characters={characters}
                setCharacters={setCharacters}
              />
            </div>
            <button
              disabled={!characters || !level}
              className="startButton"
              onClick={loadAncientOne}
            >
              ROZPOCZNIJ
            </button>
          </div>
        </div>
      </LvlCharMatt>
    </div>
  );
};
export default AncientLvlChar;
