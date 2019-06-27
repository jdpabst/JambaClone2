import React, { Component } from 'react';

import './Header.css';


class Header extends Component {

  render() {
      let { logo, order, locations, thirdParty, giftCard, rewardsIcon } = this.props;
    return (
      <div className="header">

          
          <div id='desktop-header-container'>
            <img src={ logo } id='jamba-logo' alt='jamba logo' />

            <div id='gift-rewards-container'>
              <div id='gift-cards' className='display-flex'>
                <img src={giftCard} className='extra-styling-icons' alt='gift card' />
                <p className='nunito-font'>gift cards</p>
              </div>
              <div id='rewards' className='display-flex'>
                <img src={rewardsIcon} className='extra-styling-icons' alt='rewards' />
                <p className='nunito-font'>rewards</p>
              </div>
            </div>

            <div id='header-container-inner'>
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
            <div id='mobile-upper-header'>
              <div id='order-bttn'>
                <img src={order} className='order-bttn-icon'/>
                <p>order now</p>
                <img src={ thirdParty } className='third-party-icon' id='order-third-party-icon' alt='arrow icon' />
              </div>
              <img src='' id='jamba-logo' alt='jamba logo' />
              <div id='mobile-dropdown-menu'>
                {/* use animations to bring in the menu */}
              </div>
            </div>
            <div id='mobile-lower-header'>
              <div id='locations'>
                <img src='' alt='locations icons' />
                <p>locations</p>
                <img src='' alt='arrow icon' />
              </div>
              <p>menu</p>
            </div>
          </div>

      </div>
    );
  }
}


export default Header;