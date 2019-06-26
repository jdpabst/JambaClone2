import React, { Component } from 'react';

import './Header.css';


class Header extends Component {

  render() {
      let { logo, order, locations, thirdParty } = this.props;
    return (
      <div className="header">

          <div id='header-container'>
                <img src={ logo } id='jamba-logo' alt='jamba logo' />

                <div id='header-items'>
                    <p>menu</p>
                    <p>about</p>
                    <div id='extra-icons-menu-items'>
                        <p>franchising</p>
                        <img src={thirdParty} id='third-party-icon' alt='arrow icon'/>
                    </div>
                    <p>delivery</p>
                    <div id='extra-icons-menu-items'>
                        <img src={locations} alt='locations icon' />
                        <p>locations</p>
                        <img src={thirdParty} id='third-party-icon' alt='arrow icon' />
                    </div>
                </div>
                <div id='order-bttn'>
                    <img src={order} id='third-party-icon' alt='arrow icon' />
                </div>

            {/* <div id='gift-rewards-container'>
              <div id='gift-cards'>
                <img src='' alt='gift card' />
                <p>gift cards</p>
              </div>
              <div id='rewards'>
                <img src='' alt='rewards' />
                <p>rewards</p>
              </div>
            </div> */}
          </div>

          {/* <div id='mobile-header'>
            <div id='mobile-upper-header'>
              <div id='order-bttn'>
                <p>order now</p> 
                <img src='' alt='arrow icon' />
              </div>
              <img src='' id='jamba-logo' alt='jamba logo' />
              <div id='mobile-dropdown-menu'> */}
                {/* use animations to bring in the menu */}
              {/* </div>
            </div>
            <div id='mobile-lower-header'>
              <div id='locations'>
                <img src='' alt='locations icons' />
                <p>locations</p>
                <img src='' alt='arrow icon' />
              </div>
              <p>menu</p>
            </div>
          </div> */}

      </div>
    );
  }
}


export default Header;