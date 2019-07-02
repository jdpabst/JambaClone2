import React, { Component } from 'react';
import logo from '../../assets/asset 0.svg';
import mobileLogo from '../../assets/asset 2.svg';
import orderBttn from '../../assets/asset 18.svg';
import locationsIcon from '../../assets/asset 17.svg';
import thirdPartyIcon from '../../assets/thirdParty.svg';
import giftCard from '../../assets/gift-card.svg';
import rewardsIcon from '../../assets/star.svg';
import mobileMenuIcon1 from '../../assets/asset 19.png';
import mobileMenuIcon2 from '../../assets/asset 20.png';
import mobileMenuIcon3 from '../../assets/asset 21.png';
import underline from '../../assets/underline.png';
import smoothieTrans from '../../assets/smoothie-transparent.png';
import smoothieFill from '../../assets/smoothie-filled.png';
import bowlTrans from '../../assets/bowl-transparent.png';
import bowlFill from '../../assets/bowl-filled.png'
import shotsTrans from '../../assets/shots-transparent.png';
import shotsFill from '../../assets/shots-filled.png'
import juicesTrans from '../../assets/juices-transparent.png';
import juicesFill from '../../assets/juices-filled.png';
import bitesTrans from '../../assets/bites-transparent.png';
import bitesFill from '../../assets/bites-filled.png';
import kidsTrans from '../../assets/kids-transparent.png';
import kidsFill from '../../assets/kids-filled.png';
import Header from '../Header/Header';


import './Home.css';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
  }
  
  render() {
  
    return (
      <div className="home">
        < Header mobileLogo={mobileLogo} mobileMenuIcon1={mobileMenuIcon1} mobileMenuIcon2={mobileMenuIcon2} mobileMenuIcon3={mobileMenuIcon3} giftCard={giftCard} rewardsIcon={rewardsIcon} logo={logo} order={orderBttn} thirdParty={thirdPartyIcon} locations={locationsIcon}/>
          <div id='main-home-container' className='nunito-font'>
            <div id='refresh-refuel-main-img'>
              <img src='https://cdn.jamba.com/-/media/jamba/hero/mainhero_home_mobile_768x563.jpg?v=1&d=20190524T194956Z' alt='fruits and veggies'/>
            </div>
            <div id='refresh-refuel'>
              <div id='refresh-refuel-cta'>
                <div id='green-border' >
                  <div id='cta-title-container' className='line-height-30'>
                  <h1 className='girlNextDoorFont fontSize30'>REFRESH</h1>
                  <h1 className='fontSize45'>and refuel</h1>
                  </div>
                  <p>We bring it all – from plant-based smoothies to sweeter blends. Energize your body by the spoonful and the strawful.</p>
                  <div id='refresh-refuel-cta-explore-bttn'>
                    <p>explore jamba</p>
                  </div>
                </div>
              </div>
              <div id='our-menu-container' className='line-height-30'>
                <h1 className='girlNextDoorFont fontSize30'>OUR</h1>
                <h1 className='fontSize45'>menu</h1>
              </div>
              <img src={underline} id='orange-dotted-underline'/>

              <div id='carousel-container'>
                <div id='menu-items-carousel' className='display-flex'>
                  <div className='flex-children-margin'>
                    <img src= { smoothieTrans } alt='smoothies' />
                    <p>smoothies</p>
                  </div>
                  <div className='flex-children-margin'>
                    <img src={ bowlTrans } alt='bowls' />
                    <p>bowls</p>
                  </div>
                  <div className='flex-children-margin'>
                    <img src={ shotsTrans } alt='shots' />
                    <p>shots</p>
                  </div>
                  <div className='flex-children-margin'>
                    <img src={ juicesTrans } alt='juices' />
                    <p>juices</p>
                  </div>
                  <div className='flex-children-margin'>
                    <img src={ bitesTrans } alt='bites' />
                    <p>bites</p>
                  </div>
                  <div className='flex-children-margin'>
                    <img src={ kidsTrans } alt='kids' />
                    <p>kids</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}


export default Home;