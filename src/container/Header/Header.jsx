import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';




const Header = () => (
  <div className="app__header app__wrapper section__padding" id="info">

    {/* will contain the left content */}
    <div className="app__wrapper_info">

      <SubHeading title="ዝመረጽክሞ ዓይነት መግቢ" />
      <h1 className="app__header-h1"> ዝበለጸ ናይ ሓበሻ መግቢ...</h1>
      <p style={{ margin: '3rem 0', color: 'white', fontFamily: 'fantasy', fontStyle: 'italic', fontSize: '17px' }}>

        Chicken breast in onion-sweet,
        spicy barbecue-like sauce which has no tomato.
        Instead it has a sophisticated spice
        combination known as Berbere – hot red peppers, ginger, rue seed, sacred basil,
        cloves, cinnamon, cardamom and bishop’s weed are among other spices individually
        prepared and grounded together in the exotic blend.
      </p>
      <button type="button" className="custom__button" >ዝርዝራት ትሕዝቶና</button>

    </div>

    {/* will containe the img */}
    <div className="app__wrapper_img">
      <img src={images.engera} alt="header img" style={{ height: '40%' }} />
    </div>
  </div>
);


export default Header;
