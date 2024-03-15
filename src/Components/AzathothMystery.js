import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import AzathothMysteryCard1 from '../InteractiveCards/AzathothMysteryCard1';
import AzathothMysteryCard2 from '../InteractiveCards/AzathothMysteryCard2';
import AzathothMysteryCard3 from '../InteractiveCards/AzathothMysteryCard3';
import AzathothMysteryCard4 from '../InteractiveCards/AzathothMysteryCard4';
import 'reactjs-popup/dist/index.css';
import './Components.css';

class CthulhuMystery extends Component {
  constructor({
    props,
    chooseMystery,
    canPop,
    discardMysteryDeck,
    mysteryDecrement,
    mysteryIncrementFull,
    mysteryIncrementHalf,
    mysteryDeck,
    mysteryDone,
    mysteryDoneFinal,
  }) {
    super(props);
    this.chooseMystery = chooseMystery;
    this.canPop = canPop;
    this.discardMysteryDeck = discardMysteryDeck;
    this.mysteryDecrement = mysteryDecrement;
    this.mysteryIncrementFull = mysteryIncrementFull;
    this.mysteryIncrementHalf = mysteryIncrementHalf;
    this.mysteryDeck = mysteryDeck;
    this.mysteryDone = mysteryDone;
    this.mysteryDoneFinal = mysteryDoneFinal;
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
          <AzathothMysteryCard1
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementHalf={this.mysteryIncrementHalf}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={!this.props.ancientCardFlipped ? this.mysteryDone : this.mysteryDoneFinal}
          />
        ) : null}
        {this.props.isMystery2Active ? (
          <AzathothMysteryCard2
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementHalf={this.mysteryIncrementHalf}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={!this.props.ancientCardFlipped ? this.mysteryDone : this.mysteryDoneFinal}
          />
        ) : null}
        {this.props.isMystery3Active ? (
          <AzathothMysteryCard3
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementHalf={this.mysteryIncrementHalf}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={!this.props.ancientCardFlipped ? this.mysteryDone : this.mysteryDoneFinal}
          />
        ) : null}
        {this.props.isMystery4Active ? (
          <AzathothMysteryCard4
            characters={this.props.characters}
            mysteryDecrement={this.mysteryDecrement}
            mysteryCounter={this.props.mysteryCounter}
            mysteryIncrementFull={this.mysteryIncrementFull}
            key={this.props.ancientCardFlipped}
            mysteryDeck={this.mysteryDeck}
            victory={this.props.victory}
            ancientCardFlipped={this.props.ancientCardFlipped}
            mysteryDone={!this.props.ancientCardFlipped ? this.mysteryDone : this.mysteryDoneFinal}
          />
        ) : null}
      </div>
    );
  }
}

export default CthulhuMystery;
