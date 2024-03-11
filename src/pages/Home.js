import React from "react";
import eldritch_logo from "../pictures/Main/Eldritch_logo.png";
import {ANCIENTS} from "../constants"
import './AllPages.css'


const Home = ({ chooseAncientOne, chooseAzathoth, chooseYogSothoth, chooseShubNiggurath, chooseCthulhu }) => {

    return (
        <div className='home'>
            <div>
                <img src={eldritch_logo} className="main_eldritch_logo" alt="eldritch_logo" />
            </div>
            <div>
                <h1 className="mainTitle">WYBIERZ PRZEDWIECZNEGO:</h1>
            </div>
            <div className="ancientsButtons">
                <button className="mainButton" id="ButtonAzathoth" onClick={() => chooseAncientOne(ANCIENTS.AZATHOTH)}>Azathoth</button>
                <button className="mainButton" id="ButtonYog" onClick={chooseYogSothoth}>Yog-Sothoth</button>
                <button className="mainButton" id="ButtonShub" onClick={chooseShubNiggurath}>Shub-Niggurath</button>
                <button className="mainButton" id="ButtonCthulhu" onClick={chooseCthulhu}>Cthulhu</button>
            </div>
        </div>
    )
}

export default Home;