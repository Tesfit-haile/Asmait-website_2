import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {


  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="app__navbar-log-img" src={images.Asmait2} alt="" srcset="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menus</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="app__navbar-login">
        <a className="p__opensans" href="#Login">ተመዝገብ / እቶ</a>

        <div />
        <a className="p__opensans" href="/">ቆጸራ-ሓዙ</a>

      </div>

      {/* humbergare */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => { setToggleMenu(true) }} />

        {/* show the drop down menu only when the state is ture */}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            < MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
            {/* hidden lists */}
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menus</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contacts">Contacts</a></li>

            </ul>
          </div>
        )}
      </div>

    </nav>
  )
}



export default Navbar;
