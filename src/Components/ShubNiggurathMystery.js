import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import ShubNiggurathMysteryCard1 from '../InteractiveCards/ShubNiggurathMysteryCard1';
import ShubNiggurathMysteryCard2 from '../InteractiveCards/ShubNiggurathMysteryCard2';
import ShubNiggurathMysteryCard3 from '../InteractiveCards/ShubNiggurathMysteryCard3';
import ShubNiggurathMysteryCard4 from '../InteractiveCards/ShubNiggurathMysteryCard4';
import ShubNiggurathMysteryRise from '../InteractiveCards/ShubNiggurathMysteryRise';
import 'reactjs-popup/dist/index.css';
import './Components.css';

class ShubNiggurathMystery extends Component {
  constructor({
    props,
    chooseMystery,
    canPop,
    discardMysteryDeck,
    mysteryDecrement,
    mysteryIncrementFull,
    mysteryIncrementHalf,
    mysteryIncrementDouble,
    mysteryDeck,
    shubNiggurathAwakening,
    mysteryDone,
    mysteryDoneFinal,
    mysteryDecrementMonster,
    mysteryIncrementMonster,
  }) {
    super(props);
    this.chooseMystery = chooseMystery;
    this.canPop = canPop;
    this.discardMysteryDeck = discardMysteryDeck;
    this.mysteryDecrement = mysteryDecrement;
    this.mysteryIncrementFull = mysteryIncrementFull;
    this.mysteryIncrementHalf = mysteryIncrementHalf;
    this.mysteryIncrementDouble = mysteryIncrementDouble;
    this.mysteryDeck = mysteryDeck;
    this.shubNiggurathAwakening = shubNiggurathAwakening;
    this.mysteryDone = mysteryDone;
    this.mysteryDoneFinal = mysteryDoneFinal;
    this.mysteryDecrementMonster = mysteryDecrementMonster;
    this.mysteryIncrementMonster = mysteryIncrementMonster;
  }

  render() {
    return (
      <div className="ancient-mystery">
        <div className="ancient-mystery-discard">
          {this.props.popping ? (
            <Popup
              onOpen={this.chooseMystery}
              onClose={this.canPop}
              contentStyle={{ background: 'transparent', border: 'transparent' }}
              trigger={
                <button
                  className={this.props.isLoadDone ? 'ancient-mystery-reverse' : 'ancient-mystery-reverse-stamp'}
                  id={`${this.props.ancient}MysteryReverse`}
                >
                  <p className="mystery-counter-text">
                    Rozwiązano: {this.discardMysteryDeck.length}
                    <span>/3</span>
                  </p>
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="outer-popup">
                  <div
                    className="ancient-mystery-front-popup"
                    id={`${this.props.ancient}MysteryFront${this.props.prevMysteryNo}`}
                  >
                    <button className="mystery-close-button" onClick={() => close()}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          ) : (
            <button className="ancient-mystery-reverse" id={`${this.props.ancient}MysteryReverse`}>
              <p className="mystery-counter-text">
                Rozwiązano: {this.discardMysteryDeck.length}
                <span>/3</span>
              </p>
            </button>
          )}
          <div className="ancient-mystery-discard-button-div">
            <Popup
              contentStyle={{ background: 'transparent', border: 'transparent' }}
              trigger={
                this.discardMysteryDeck.length !== 0 ? (
                  <button className="discard-button" id="discardMystery">
                    ODRZUCONE
                  </button>
                ) : null
              }
              modal
              nested
            >
              {(close) => (
                <div className="outer-popup-discard">
                  <button className="mystery-discard-close-button" onClick={() => close()}>
                    X
                  </button>
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                    id="swiperMystery"
                  >
                    {this.discardMysteryDeck.length >= 1 ? (
                      <SwiperSlide>
                        <div
                          className="mystery-card-discard"
                          id={`${this.props.ancient}MysteryFront${
                            this.discardMysteryDeck[this.discardMysteryDeck.length - 1]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardMysteryDeck.length >= 2 ? (
                      <SwiperSlide>
                        <div
                          className="mystery-card-discard"
                          id={`${this.props.ancient}MysteryFront${
                            this.discardMysteryDeck[this.discardMysteryDeck.length - 2]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardMysteryDeck.length >= 3 ? (
                      <SwiperSlide>
                        <div
                          className="mystery-card-discard"
                          id={`${this.props.ancient}MysteryFront${
                            this.discardMysteryDeck[this.discardMysteryDeck.length - 3]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardMysteryDeck.length >= 4 ? (
                      <SwiperSlide>
                        <div
                          className="mystery-card-discard"
                          id={`${this.props.ancient}MysteryFront${
                            this.discardMysteryDeck[this.discardMysteryDeck.length - 4]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                  </Swiper>
                </div>
              )}
            </Popup>
          </div>
        </div>
        {this.props.isMystery1Active ? (
          <ShubNiggurathMysteryCard1
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementHalf={this.mysteryIncrementHalf}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={
              this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.mysteryDoneFinal : this.mysteryDone
            }
          />
        ) : null}
        {this.props.isMystery2Active ? (
          <ShubNiggurathMysteryCard2
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementFull={this.mysteryIncrementFull}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={
              this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.mysteryDoneFinal : this.mysteryDone
            }
          />
        ) : null}
        {this.props.isMystery3Active ? (
          <ShubNiggurathMysteryCard3
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementDouble={this.mysteryIncrementDouble}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={
              this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.mysteryDoneFinal : this.mysteryDone
            }
          />
        ) : null}
        {this.props.isMystery4Active ? (
          <ShubNiggurathMysteryCard4
            characters={this.props.characters}
            mysteryDecrementMonster={this.mysteryDecrementMonster}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementMonster={this.mysteryIncrementMonster}
            key={this.props.ancientCardFlipped}
            monsterSlayed={this.props.monsterSlayed}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={
              this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.mysteryDoneFinal : this.mysteryDone
            }
          />
        ) : null}
        {this.props.isShubNiggurathAwake ? (
          <ShubNiggurathMysteryRise
            characters={this.props.characters}
            discardMysteryDeck={this.discardMysteryDeck}
            shubNiggurathSlayed={this.props.victory}
          />
        ) : null}
      </div>
    );
  }
}

export default ShubNiggurathMystery;
