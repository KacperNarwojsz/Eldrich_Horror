import React, { Component } from 'react';
import EncountersCards from '../Components/EncountersCards';
import EldritchBoard from '../Components/EldritchBoard';
import AncientBoard from '../Components/AncientBoard';
import Popup from 'reactjs-popup';
import chooseRandom from '../Components/Shuffler';
import { ANCIENTS, CARDS, EXPEDITIONS } from '../constants';
import './AllPages.css';

// DONE:
// karty do contstants.js
// Niejawny elseif na obiekcie

class Ancient extends Component {
  constructor({ ancient, level, characters, victory, defeat }) {
    super();
    this.shuffleDeckReverseExpedition = [...EXPEDITIONS];
    this.shuffleDeckReverseExpeditionFiltered = [...EXPEDITIONS];
    this.discardDeckReverseExpedition = [];
    this.deletedDeckReverseExpedition = [];
    this.shuffleDeckExpeditionAntarctica = [1, 2, 3];
    this.shuffleDeckExpeditionTheAmazon = [1, 2, 3];
    this.shuffleDeckExpeditionTheHeartofAfrica = [1, 2, 3];
    this.shuffleDeckExpeditionTheHimalayas = [1, 2, 3];
    this.shuffleDeckExpeditionThePyramids = [1, 2, 3];
    this.shuffleDeckExpeditionTunguska = [1, 2, 3];
    this.discardDeckExpedition = [];
    this.mythosDeckGreenEasy = [...CARDS.EASY.GREEN, ...CARDS.NORMAL.GREEN];
    this.mythosDeckGreenNormal = [...CARDS.EASY.GREEN, ...CARDS.NORMAL.GREEN, ...CARDS.HARD.GREEN];
    this.mythosDeckGreenHard = [...CARDS.NORMAL.GREEN, ...CARDS.HARD.GREEN];
    this.mythosDeckYellowEasy = [...CARDS.EASY.YELLOW, ...CARDS.NORMAL.YELLOW];
    this.mythosDeckYellowNormal = [...CARDS.EASY.YELLOW, ...CARDS.NORMAL.YELLOW, ...CARDS.HARD.YELLOW];
    this.mythosDeckYellowHard = [...CARDS.NORMAL.YELLOW, ...CARDS.HARD.YELLOW];
    this.mythosDeckBlueEasy = [...CARDS.EASY.BLUE, ...CARDS.NORMAL.BLUE];
    this.mythosDeckBlueNormal = [...CARDS.EASY.BLUE, ...CARDS.NORMAL.BLUE, ...CARDS.HARD.BLUE];
    this.mythosDeckBlueHard = [...CARDS.NORMAL.BLUE, ...CARDS.HARD.BLUE];
    this.mythosDeckGreen = [];
    this.mythosDeckYellow = [];
    this.mythosDeckBlue = [];
    this.mythosDeck = [];
    this.mythosDeckStage2 = [];
    this.mythosDeckStage3 = [];
    this.rumorDeck = [];
    this.state = {
      ancient: ancient,
      level: level,
      characters: characters,
      victory: victory,
      defeat: defeat,
      expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
      expeditionPreviousReverse: 0,
      expeditionShuffle: 0,
      deletedAntarctica: false,
      deletedTheAmazon: false,
      deletedTheHeartofAfrica: false,
      deletedTheHimalayas: false,
      deletedThePyramids: false,
      deletedTunguska: false,
    };

    const levelConfig = {
      Easy: {
        green: this.mythosDeckGreenEasy,
        yellow: this.mythosDeckYellowEasy,
        blue: this.mythosDeckBlueEasy,
      },
      Normal: {
        green: this.mythosDeckGreenNormal,
        yellow: this.mythosDeckYellowNormal,
        blue: this.mythosDeckBlueNormal,
      },
      Hard: {
        green: this.mythosDeckGreenHard,
        yellow: this.mythosDeckYellowHard,
        blue: this.mythosDeckBlueHard,
      },
    };

    this.mythosDeckGreen = levelConfig[level].green;
    this.mythosDeckYellow = levelConfig[level].yellow;
    this.mythosDeckBlue = levelConfig[level].blue;

    const mythosDeckSetup = (green, yellow, blue) => {
      const greenCards = Array.from({ length: green }).map(() => chooseRandom(this.mythosDeckGreen));
      const blueCards = Array.from({ length: blue }).map(() => chooseRandom(this.mythosDeckBlue));
      const yellowCards = Array.from({ length: yellow }).map(() => chooseRandom(this.mythosDeckYellow));

      return [...greenCards, ...blueCards, ...yellowCards];
    };

    if (ancient === ANCIENTS.AZATHOTH) {
      this.mythosDeck = mythosDeckSetup(1, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(2, 3, 1);
      this.mythosDeckStage3 = mythosDeckSetup(2, 4, 0);
    } else if (ancient === ANCIENTS.YOGSOTHOTH) {
      this.mythosDeck = mythosDeckSetup(0, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(2, 3, 1);
      this.mythosDeckStage3 = mythosDeckSetup(3, 4, 0);
    } else if (ancient === ANCIENTS.SHUBNIGGURATH) {
      this.mythosDeck = mythosDeckSetup(1, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(3, 2, 1);
      this.mythosDeckStage3 = mythosDeckSetup(2, 4, 0);
    } else if (ancient === ANCIENTS.CTHULHU) {
      this.mythosDeck = mythosDeckSetup(0, 2, 2);
      this.mythosDeckStage2 = mythosDeckSetup(1, 3, 0);
      this.mythosDeckStage3 = mythosDeckSetup(3, 4, 0);
    }
    for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
      this.rumorDeck.push(this.mythosDeckBlue[i]);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //     if  (prevState.expeditionPreviousReverse !== this.state.expeditionPreviousReverse ||
  //          prevState.expeditionShuffle !== this.state.expeditionShuffle) {
  //         this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
  //         this.discardDeckExpedition.push(this.state.expeditionShuffle);
  //     }
  // }

  componentDidUpdate() {
    if (this.shuffleDeckReverseExpedition.length < 1) {
      this.shuffleDeckReverseExpedition = this.shuffleDeckReverseExpeditionFiltered.slice();
    }
  }

  handleExpeditionShuffle = () => {
    switch (this.state.expeditionReverseShuffle) {
      case 'Antarctica':
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionAntarctica),
        });
        if (this.shuffleDeckExpeditionAntarctica.length < 1) {
          this.shuffleDeckExpeditionAntarctica = [1, 2, 3];
        }
        break;
      case 'TheAmazon':
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheAmazon),
        });
        if (this.shuffleDeckExpeditionTheAmazon.length < 1) {
          this.shuffleDeckExpeditionTheAmazon = [1, 2, 3];
        }
        break;
      case 'TheHeartofAfrica':
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHeartofAfrica),
        });
        if (this.shuffleDeckExpeditionTheHeartofAfrica.length < 1) {
          this.shuffleDeckExpeditionTheHeartofAfrica = [1, 2, 3];
        }
        break;
      case 'TheHimalayas':
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHimalayas),
        });
        if (this.shuffleDeckExpeditionTheHimalayas.length < 1) {
          this.shuffleDeckExpeditionTheHimalayas = [1, 2, 3];
        }
        break;
      case 'ThePyramids':
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionThePyramids),
        });
        if (this.shuffleDeckExpeditionThePyramids.length < 1) {
          this.shuffleDeckExpeditionThePyramids = [1, 2, 3];
        }
        break;
      default:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTunguska),
        });
        if (this.shuffleDeckExpeditionTunguska.length < 1) {
          this.shuffleDeckExpeditionTunguska = [1, 2, 3];
        }
    }
    this.setState((prevState) => ({
      expeditionPreviousReverse: prevState.expeditionReverseShuffle,
    }));
    this.setState({
      expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
    });
  };

  handleExpeditionDiscard = () => {
    this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
    this.discardDeckExpedition.push(this.state.expeditionShuffle);
  };

  removeExpedition = () => {
    if (this.state.expeditionReverseShuffle === 'Antarctica') {
      this.setState({ deletedAntarctica: true });
    } else if (this.state.expeditionReverseShuffle === 'TheAmazon') {
      this.setState({ deletedTheAmazon: true });
    } else if (this.state.expeditionReverseShuffle === 'TheHeartofAfrica') {
      this.setState({ deletedTheHeartofAfrica: true });
    } else if (this.state.expeditionReverseShuffle === 'TheHimalayas') {
      this.setState({ deletedTheHimalayas: true });
    } else if (this.state.expeditionReverseShuffle === 'ThePyramids') {
      this.setState({ deletedThePyramids: true });
    } else if (this.state.expeditionReverseShuffle === 'Tunguska') {
      this.setState({ deletedTunguska: true });
    }
    this.deletedDeckReverseExpedition.push(this.state.expeditionReverseShuffle);
    let filterExpeditions = this.shuffleDeckReverseExpedition.filter(
      (currentExpedition) => currentExpedition !== this.state.expeditionReverseShuffle
    );
    this.shuffleDeckReverseExpedition = filterExpeditions;
    let backupExpeditions = this.shuffleDeckReverseExpeditionFiltered.filter(
      (currentExpedition) => currentExpedition !== this.state.expeditionReverseShuffle
    );
    this.shuffleDeckReverseExpeditionFiltered = backupExpeditions;
    if (this.shuffleDeckReverseExpedition.length === 0 && this.shuffleDeckReverseExpeditionFiltered.length !== 0) {
      this.setState({
        expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpeditionFiltered),
      });
    } else {
      this.setState({
        expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
      });
    }
  };

  // undoRemoveExpedition = () => {
  //     if      (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Antarctica')       {this.setState({deletedAntarctica: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheAmazon')        {this.setState({deletedTheAmazon: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHeartofAfrica') {this.setState({deletedTheHeartofAfrica: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHimalayas')     {this.setState({deletedTheHimalayas: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'ThePyramids')      {this.setState({deletedThePyramids: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Tunguska')         {this.setState({deletedTunguska: false})}
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.deletedDeckReverseExpedition.pop()
  // }

  render() {
    return (
      <div className="ancient" id={`${this.props.ancient}`}>
        <EldritchBoard>
          <div className="top-div">
            <div className="board-div">
              <div className="flex-div">
                <Popup
                  contentStyle={{
                    background: 'transparent',
                    border: 'transparent',
                  }}
                  trigger={<button className="back-board-button"></button>}
                  modal
                  nested
                >
                  {(close) => (
                    <div className="defeat-popup">
                      <h1 className="defeat-popup-text">Czy chcesz wrócić ?</h1>
                      <div className="defeat-choice-buttons">
                        <button
                          className="defeat-choice-button"
                          onClick={
                            () => this.props.chooseAncient(this.state.ancient)
                            // this.props.ancient === ANCIENTS.AZATHOTH
                            //   ? this.state.chooseAzathoth
                            //   : this.props.ancient === ANCIENTS.YOGSOTHOTH
                            //   ? this.state.chooseYogSothoth
                            //   : this.props.ancient === ANCIENTS.SHUBNIGGURATH
                            //   ? this.state.chooseShubNiggurath
                            //   : this.state.chooseCthulhu
                          }
                        >
                          TAK
                        </button>
                        <button className="defeat-choice-button" onClick={() => close()}>
                          NIE
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
                {/* <button className="back-board-button" 
                                        onClick={this.props.ancient === 'Azathoth'?this.state.chooseAzathoth
                                                :this.props.ancient === 'YogSothoth'?this.state.chooseYogSothoth
                                                :this.props.ancient === 'ShubNiggurath'?this.state.chooseShubNiggurath
                                                :this.state.chooseCthulhu}></button> */}
                {/* <button onClick={this.removeExpedition}>CLICK ME</button> */}
                <AncientBoard
                  level={this.state.level}
                  characters={this.state.characters}
                  ancient={this.props.ancient}
                  mythosDeck={this.mythosDeck}
                  mythosDeckStage2={this.mythosDeckStage2}
                  mythosDeckStage3={this.mythosDeckStage3}
                  rumorDeck={this.rumorDeck}
                  expeditionReverseShuffle={this.state.expeditionReverseShuffle}
                  deletedDeckReverseExpedition={this.deletedDeckReverseExpedition}
                  deletedAntarctica={this.state.deletedAntarctica}
                  deletedTheAmazon={this.state.deletedTheAmazon}
                  deletedTheHeartofAfrica={this.state.deletedTheHeartofAfrica}
                  deletedTheHimalayas={this.state.deletedTheHimalayas}
                  deletedThePyramids={this.state.deletedThePyramids}
                  deletedTunguska={this.state.deletedTunguska}
                  removeExpedition={this.removeExpedition}
                  victory={this.state.victory}
                  defeat={this.state.defeat}
                />
                <Popup
                  contentStyle={{
                    background: 'transparent',
                    border: 'transparent',
                  }}
                  trigger={<button className="surrender-button"></button>}
                  modal
                  nested
                >
                  {(close) => (
                    <div className="defeat-popup">
                      <h1 className="defeat-popup-text">Czy chcesz poddać grę?</h1>
                      <div className="defeat-choice-buttons">
                        <button className="defeat-choice-button" onClick={this.state.defeat}>
                          TAK
                        </button>
                        <button className="defeat-choice-button" onClick={() => close()}>
                          NIE
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <EncountersCards
              handleExpeditionShuffle={this.handleExpeditionShuffle}
              handleExpeditionDiscard={this.handleExpeditionDiscard}
              expeditionReverseShuffle={this.state.expeditionReverseShuffle}
              expeditionPreviousReverse={this.state.expeditionPreviousReverse}
              expeditionShuffle={this.state.expeditionShuffle}
              discardDeckReverseExpedition={this.discardDeckReverseExpedition}
              discardDeckExpedition={this.discardDeckExpedition}
              ancient={this.props.ancient}
              defeat={this.state.defeat}
            />
          </div>
        </EldritchBoard>
      </div>
    );
  }
}

export default Ancient;
