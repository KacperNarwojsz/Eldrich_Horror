import React, { Component } from 'react';
import Home from './pages/Home';
import Ancient from './pages/Ancient';
import AncientLvlChar from './pages/AncientLvlChar';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import { ROUTES } from './constants';
import './App.css';

// Refactor na hooks i typescript
// zamiast stringów const
// konteksty
// prettier format on save - done

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ROUTES.HOME,
      ancient: false,
      level: false,
      characters: false,
    };
  }

  chooseAncient = (ancient) => {
    this.setState({ route: ROUTES.ANCIENTLVLCHAR, ancient });
  };

  loadAncient = () => {
    this.setState({ route: ROUTES.ANCIENT });
  };

  routeToVictory = () => {
    this.setState({ route: ROUTES.VICTORY });
  };

  routeToDefeat = () => {
    this.setState({ route: ROUTES.DEFEAT });
  };

  routeToHome = () => {
    this.setState({
      route: ROUTES.HOME,
      level: false,
      characters: false,
    });
  };

  reload = () => {
    window.location.reload(true);
  };

  setLvlEasy = () => {
    this.setState({ level: 'Easy' });
  };

  setLvlNormal = () => {
    this.setState({ level: 'Normal' });
  };

  setLvlHard = () => {
    this.setState({ level: 'Hard' });
  };

  setCharacters = (characters) => {
    this.setState({ characters });
  };

  setCharTo1 = () => {
    this.setState({ characters: 1 });
  };

  setCharTo2 = () => {
    this.setState({ characters: 2 });
  };

  setCharTo3 = () => {
    this.setState({ characters: 3 });
  };

  setCharTo4 = () => {
    this.setState({ characters: 4 });
  };

  setCharTo5 = () => {
    this.setState({ characters: 5 });
  };

  setCharTo6 = () => {
    this.setState({ characters: 6 });
  };

  setCharTo7 = () => {
    this.setState({ characters: 7 });
  };

  setCharTo8 = () => {
    this.setState({ characters: 8 });
  };

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch (route) {
        case ROUTES.ANCIENTLVLCHAR:
          return (
            <AncientLvlChar
              ancient={this.state.ancient}
              loadAncient={this.loadAncient}
              loadHome={this.routeToHome}
              level={this.state.level}
              characters={this.state.characters}
              chooseLvlEasy={this.setLvlEasy}
              chooseLvlNormal={this.setLvlNormal}
              chooseLvlHard={this.setLvlHard}
              chooseCharNo1={this.setCharTo1}
              chooseCharNo2={this.setCharTo2}
              chooseCharNo3={this.setCharTo3}
              chooseCharNo4={this.setCharTo4}
              chooseCharNo5={this.setCharTo5}
              chooseCharNo6={this.setCharTo6}
              chooseCharNo7={this.setCharTo7}
              chooseCharNo8={this.setCharTo8}
              setCharacters={this.setCharacters}
            />
          );
        case ROUTES.ANCIENT:
          return (
            <Ancient
              chooseAzathoth={this.chooseAzathoth}
              chooseYogSothoth={this.chooseYogSothoth}
              chooseShubNiggurath={this.chooseShubNiggurath}
              chooseCthulhu={this.chooseCthulhu}
              ancient={this.state.ancient}
              level={this.state.level}
              characters={this.state.characters}
              victory={this.routeToVictory}
              defeat={this.routeToDefeat}
            />
          );
        case ROUTES.VICTORY:
          return <Victory reloadApp={this.reload} />;
        case ROUTES.DEFEAT:
          return <Defeat reloadApp={this.reload} />;
        default:
          return <Home chooseAncient={this.chooseAncient} />;
      }
    };

    return (
      <div className="App">
        <div>{checkRoute(route)}</div>
      </div>
    );
  }
}

export default App;
