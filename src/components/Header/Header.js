import React, { Component } from 'react';

import './Header.css';


class Header extends Component {

  render() {
      let { logo, order, locations, mobileLogo, thirdParty, giftCard, rewardsIcon, mobileMenuIcon1, mobileMenuIcon2, mobileMenuIcon3 } = this.props;
    return (
      <div className="header">

          
          <div id='desktop-header-container'>

          <div id='gift-rewards-container'>
              <div id='gift-cards' className='display-flex'>
                <img src={giftCard} className='extra-styling-icons' alt='gift card' />
                <p className='nunito-font'>gift cards</p>
              </div>
              {/* <div id='rewards' className='display-flex'>
                <img src={rewardsIcon} className='extra-styling-icons' alt='rewards' />
                <p className='nunito-font'>rewards</p>
              </div> */}
          </div>
            
            <img src={ logo } id='jamba-logo' alt='jamba logo' />

            <div id='header-container-inner'  className='nunito-font'>
                <div id='header-items'>
                    <p>menu</p>
                    <p>about</p>
                    <p>app</p>
                    <div id='extra-icons-menu-items'>
                        <p>franchising</p>
                        <img src={thirdParty} className='third-party-icon' alt='arrow icon'/>
                    </div>
                    <p>delivery</p>
                    <div id='extra-icons-menu-items'>
                        <img src={locations} alt='locations icon' />
                        <p>locations</p>
                        <img src={ thirdParty } className='third-party-icon' alt='arrow icon' />
                    </div>
                </div>
            
                <div id='order-bttn'>
                    <img src={order} className='order-bttn-icon'/>
                    <p>order now</p>
                    <img src={ thirdParty } className='third-party-icon' id='order-third-party-icon' alt='arrow icon' />
                </div>
            </div>
          </div>

          <div id='mobile-header'>
            <div id='mobile-upper-header' className='display-flex'>
              <div id='order-bttn'>
                <img src={order} className='order-bttn-icon'/>
                <p>order now</p>
                <img src={ thirdParty } className='third-party-icon' id='order-third-party-icon' alt='arrow icon' />
              </div>
              <img src={ mobileLogo } id='jamba-logo' alt='jamba logo' />
              <div id='mobile-dropdown-menu' className='display-flex'>
                <img src={ mobileMenuIcon1 } alt='mobile menu' className='mobile-menu-icon' />
                <img src={ mobileMenuIcon2 } alt='mobile menu' className='mobile-menu-icon' />
                <img src={ mobileMenuIcon3 } alt='mobile menu' className='mobile-menu-icon' />
              </div>
            </div>
            <div id='mobile-lower-header' className='display-flex'>
              <div id='extra-icons-menu-items'>
                <img src={locations} alt='locations icon' />
                <p className='nunito-font'>locations</p>
                <img src={ thirdParty } className='third-party-icon' alt='arrow icon' />
              </div>
              <p className='nunito-font'>menu</p>
            </div>
          </div>

      </div>
    );
  }
}


export default Header;