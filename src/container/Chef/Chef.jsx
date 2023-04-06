import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components'
import { images } from '../../constants'

const Chef = ({ title }) => (
  <div className="app__bg app__wrapper section__padding">
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.Asmait_real} alt="Chef" />
    </div>

    {/* title */}
    <div className='app__wrapper_info'>
      <SubHeading title="ዋሓለ ሸፍና" />
      <h1 className='headtext__cormorant'>ዕላማና ዕግበት ዓማዊልና'ዩ</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_qoute'>
          <img src={images.quote} alt="" srcset="" />
          <p className='p__opensans' style={{ marginLeft: '1rem' }}>ሸፋትና ኣብ ዝደለኹሞ ግዜን ሰዓት ከምት ዝጠለብክሞ ጌርና ጉዳይኩም ከነጸብቀልሙ ድልዋት ኢና</p>
        </div>
        <p className='p__opensans'>
          ንልዕሊ ሓሙሽተ ዓመታትን ዝበለጹ ናይ መርዓታትን፤ ጥምቀታትን፥ ኣብ በዓልት ዝግበሩ ጉዳያትን፥ ግብጃታትን ካለኦት ኣብ ዝተፈላለዩ ጉዳይት ዝግበሩ ጽምብላትን በቶም ኣዝዮም ምኩራትን ውሕሉላትን ዝዀኑ ሸፋትና ኣብ ዝደለኹሞ ግዜን ሰዓት ከምት ዝጠለብክሞ ጌርና ጉዳይኩም ከነጸብቀልሙ ድልዋት ኢና።</p>

      </div>

      {/* chef sign-in */}
      <div className='app__chef-sign'>
        <p>Tes Haile</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.tes_sign} alt="" srcset="" style={{ marginTop: '1rem' }} />
      </div>
    </div>

  </div >
);

export default Chef;
