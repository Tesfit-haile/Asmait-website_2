import React from 'react';

import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'


const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(true)
  const vidRef = React.useRef()

  // toggling
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.play()
    } else {
      vidRef.current.pause()
    }
  }

  return (

    <div className='app__video'>
      <video src={meal}
        type="video / mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      {/* the cirle */}
      <div className='app__video-overlay flex__center'>
        {/* the play button */}
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {/* render the button */}
          {playVideo ? <BsFillPlayFill color="#fff" fontSize={30} /> : <BsPauseFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )

}


export default Intro;
