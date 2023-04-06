import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';





const AboutUs = () => (

  <>
    <div className="app__aboutus app__bg flex__center section__padding">

      {/* the G bg image  */}
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g-letter bg" srcset="" />
      </div>
      <div className="app__aboutus-content flex__center">

        {/* About Us */}
        <div className="app__aboutus-contnet_about">
          <h1 className="headtext__cormorant" style={{ color: 'red' }}>ብዛዕባና</h1>
          <img src={images.spoon} alt="" srcset="" className="spoon__img" />
          <p className="p__opensans">
            ንልዕሊ ሓሙሽተ ዓመታትን ዝበለጹ ናይ መርዓታትን፤ ጥምቀታትን፥ ኣብ በዓልት ዝግበሩ ጉዳያትን፥ ግብጃታትን ካለኦት ኣብ ዝተፈላለዩ ጉዳይት ዝግበሩ ጽምብላትን በቶም ኣዝዮም ምኩራትን ውሕሉላትን ዝዀኑ ሸፋትና ኣብ ዝደለኹሞ ግዜን ሰዓት ከምት ዝጠለብክሞ ጌርና ጉዳይኩም ከነጸብቀልሙ ድልዋት ኢና።</p>
          <button type="button" className="custom__button">ተወሳኺ ሓበሬታ</button>
        </div>

        {/* knife */}
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.meatAndKnife} alt="knife" srcset="" />
        </div>

        {/* History */}

        <div className="app__aboutus-contnet_history">
          <h1 className="headtext__cormorant" style={{ color: 'red' }}>ታሪኽና</h1>
          <img src={images.spoon} alt="" srcset="" className="spoon__img" />
          <p className="p__opensans">ንልዕሊ ሓሙሽተ ዓመታትን ዝበለጹ ናይ መርዓታትን፤ ጥምቀታትን፥ ኣብ በዓልት ዝግበሩ ጉዳያትን፥ ግብጃታትን ካለኦት ኣብ ዝተፈላለዩ ጉዳይት ዝግበሩ ጽምብላትን በቶም ኣዝዮም ምኩራትን ውሕሉላትን ዝዀኑ ሸፋትና ኣብ ዝደለኹሞ ግዜን ሰዓት ከምት ዝጠለብክሞ ጌርና ጉዳይኩም ከነጸብቀልሙ ድልዋት ኢና።.</p>
          <button type="button" className="custom__button">ተወሳኺ ሓበሬታ</button>
        </div>

      </div>
    </div>

  </>

);

export default AboutUs;
