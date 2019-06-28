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
import Header from '../Header/Header'

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        < Header mobileLogo={mobileLogo} mobileMenuIcon1={mobileMenuIcon1} mobileMenuIcon2={mobileMenuIcon2} mobileMenuIcon3={mobileMenuIcon3} giftCard={giftCard} rewardsIcon={rewardsIcon} logo={logo} order={orderBttn} thirdParty={thirdPartyIcon} locations={locationsIcon}/>
          HOME

      </div>
    );
  }
}


export default Home;