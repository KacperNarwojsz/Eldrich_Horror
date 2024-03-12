import React from 'react';
import { LEVELS } from '../constants';
import '../pages/AllPages.css';

const LevelButtonsList = ({ level, setLvl }) => {
  return (
    <>
      <button
        className={
          level === LEVELS.EASY ? 'lvlButtonActive' : 'lvlButton'
        }
        onClick={() => setLvl(LEVELS.EASY)}
      >
        ŁATWY
      </button>
      <br></br>
      <button
        className={
          level === LEVELS.NORMAL ? 'lvlButtonActive' : 'lvlButton'
        }
        onClick={() => setLvl(LEVELS.NORMAL)}
      >
        NORMALNY
      </button>
      <br></br>
      <button
        className={
          level === LEVELS.HARD ? 'lvlButtonActive' : 'lvlButton'
        }
        onClick={() => setLvl(LEVELS.HARD)}
      >
        TRUDNY
      </button>
    </>
  );
};

export default LevelButtonsList;
