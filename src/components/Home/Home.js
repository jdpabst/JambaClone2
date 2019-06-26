import React, { Component } from 'react';
import logo from '../../assets/asset 0.svg'
import orderBttn from '../../assets/asset 18.svg';
import locationsIcon from '../../assets/asset 17.svg';
import thirdPartyIcon from '../../assets/thirdParty.svg'
import Header from '../Header/Header'

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        < Header logo={logo} order={orderBttn} thirdParty={thirdPartyIcon} locations={locationsIcon}/>
          HOME

      </div>
    );
  }
}


export default Home;