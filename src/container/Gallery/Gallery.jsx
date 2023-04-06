import React from 'react';

import './Gallery.css';
import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const galleryImages = [images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10]


const Gallery = () => {

  const scrollRef = React.useRef(null)
  const scroll = (dirction) => {
    const { current } = scrollRef

    if (dirction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">

      <div className="app__gallery-content">
        <SubHeading title="ኢንስታግራምና" />
        <h1 className="headtext__cormorant">ሰልእልታት ፍርይትና</h1>
        <p className="p__opensans" style={{ marginTop: '2rem' }}>ሓበሬታታት ንምርካብ ሰልእልታት ፍርይትና ሰልእልታት ፍርይትና.
          ጣዕሚ መግብታትና ብሉጽ እንግዶት ጽፈትና, ጣዕሚ መግብታትና ብሉጽ እንግዶት ጽፈትና oሰልእልታት.
        </p>
        <button type="button" className='custom__button' style={{ marginTop: '1rem' }}>ተወሳኺ ሓበሬታ</button>
      </div>


      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>

          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image - ${index + 1}`}>
              <img src={image} alt="" />
              {/* instagram */}
              <BsInstagram className='gallery__images-icons' />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery___arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery___arrow-icon" onClick={() => scroll('righ')} />
        </div>

      </div>
    </div>
  )

};

export default Gallery;
