import React from 'react';
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="ሓበሬታታት ንምርካብ" />
      <h1 className="headtext__cormorant" style={{ fontSize: '40px' }}>ኣብ ቻነልና ሳብስክራይብ ግበሩ</h1>
      <p className='p__opensans'>ሓደሽቲ ስራሓትና ከየምልጠኩም !</p>

    </div>


    {/* input */}

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="ኢሜልኩም ኣብዚ ኣቀምጡ" />
      <button className="custom__button"> ሳብስክራይብ </button>
    </div>
  </div>
);

export default Newsletter;
