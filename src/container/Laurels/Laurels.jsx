import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components'
import { images, data } from '../../constants'



//! we could've imported this Component, however, we want use it anywhere so better to put it here
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">

    <img src={imgUrl} alt="" srcset="" />
    <div className='app__laurels_awards-card_content'>
      <p className='p_cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p_cormorant' style={{ color: '#ffff' }}>{subtitle}</p>

    </div>
  </div>
)



const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>

    <div className='app__wrapper_info'>

      {/* awards */}
      <SubHeading title='ብልጫታትናን ተፈላጥነትናን' />
      <h1 className='headtext__cormorant'>ዓወታትና</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

    </div>


    <div className='app__wrapper_img'>
      <img src={images.rewardCertificate} alt="" style={{ height: '350px', width: '450px' }} />
    </div>

  </div>
);

export default Laurels;
