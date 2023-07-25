import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import LvlChar from './LvlChar';
import './Components.css'


class CthulhuBoard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            ancientCard: false,
            isLoadDone: false,
        }
        this.timer()
    }

    toggleCard = () => {
        this.setState ({ancientCard: true})
    }

    toogleCardBack = () => {
        this.setState ({ancientCard: false})
    }

    timer() {
        setInterval(() => {
          this.setState({isLoadDone: true})
        }, 7000)
      }
      
    render() {
        return (
            <div className='ancientBoard'>
                <div className='cthulhuSheetCard'>
                    <button className={this.state.isLoadDone ? 'cthulhuSheet' : 'cthulhuSheetStamp'} id={this.state.ancientCard ? 'CthulhuSheetBack' : 'CthulhuSheetFront'}></button>
                    <div className='flipButtons'>
                        <button className='flipButtonFront' id='FlipButton' onClick={this.toogleCardBack}>Front</button>
                        <button className='flipButtonBack' id='FlipButton' onClick={this.toggleCard}>Rewers</button>
                    </div> 
                </div>
                <div className='ancientMysteryMythosLvlChar'>
                    <div className='ancientMysteryLvlChar'>
                        <div className='ancientMystery'>
                            <button className={this.state.isLoadDone ? 'cthulhuMystery' : 'cthulhuMysteryStamp'}></button>
                            {/* <button className='cthulhuMystery' id='CthulhuMysteryFront'></button> */}
                        </div>
                    <LvlChar /> 
                    </div>
                    <div className='ancientMythos'>
                        <button className={this.state.isLoadDone ? 'mythos' : 'mythosStamp'}></button>
                        {/* <button className='mythosFront' id='Mythos1'></button>
                        <button className='mythosFront' id='Mythos2'></button>
                        <button className='mythosFront' id='Mythos3'></button>
                        <button className='mythosFront' id='Mythos4'></button>
                        <button className='mythosFront' id='Mythos5'></button> */}
                    </div>
                </div>
            </div>
        )
    } 
}

export default CthulhuBoard;