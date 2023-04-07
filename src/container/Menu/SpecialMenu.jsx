import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'


const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id='menu'>


    {/* title */}
    <div className="app__specialMenu-title">
      <SubHeading title="ሽውሃትካ ዝኸፍቱ ብሉጻት ዝርዝራት መግብታትና" />
      <h1 className="headtext__cormorant">ዝበለጹ ባህላውን ግዝያውን መግብታትና</h1>
    </div>

    <div className="app__specialMenu-menu">

      {/* menue */}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading" style={{ color: '#fff' }}>ናይ ጾም</p>

        <div className="app__specialMenu_menu_items">
          {data.Yexom.map((item, index) => (
            <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />

          ))}
        </div>
      </div>


      {/* image */}
      <div className="app__specialMenu-menu_img" >
        <img src={images.zrzratMegbna} alt="Image menu" srcset="" style={{ height: '650px' }} />
      </div>


      {/* Coctails */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading" style={{ color: '#fff' }}>ናይ ስዕረት</p>
        <div className="app__specialMenu_menu_items">
          {data.Yeseret.map((yitem, index) => (
            <MenuItem key={yitem.title + index} title={yitem.title} price={yitem.price} tags={yitem.tags} />

          ))}
        </div>
      </div>



    </div>

    {/* button */}
    <div className='button__speicalMenu'>
      <button type="button" className="custom__button">ብዙሕ ረኣዩ</button>
    </div>
  </div>
);

export default SpecialMenu;
