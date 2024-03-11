import React from "react";

const CharacterButtonsList = ({ characters, setCharacters }) => {
    return (
      <ul>
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <React.Fragment>
              <li style={{ display: "inline-block" }}>
                <button
                  className={
                    characters === index + 1 ? "charButtonActive" : "charButton"
                  }
                  onClick={() => setCharacters(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
              {index === 3 && <br />}
            </React.Fragment>
          );
        })}
      </ul>
    );
  };

export default CharacterButtonsList