import React from 'react'
import Navbarsec from './Navbarsec'
// import ReactPlayer from 'react-player/youtube'
import imgvideo from '../assets/images/png/herovideo.png'
import { Insta, Telegram, Twitter, CircularLinkedin } from '../common/Icons'
import arrow from '../assets/images/png/arrowellipse1.png'
import Commonbtn from '../common/Commonbtn'
const Hero = () => {
  return (
    <>
      <div className=' d-flex bg-header flex-column position-relative'>
        <Navbarsec />
        <div className=' container-md max-w-1140 pt-5'>
          <h1 data-aos="fade-up" data-aos-delay="100" className=' ff-jost fw-semibold fs-xl mx-auto color-white text-center mb-3 max-w-1089 text-uppercase'>Start the Mini-Course: <span className=' color-gradient'>Rapidly Learning New Technical Skills</span> </h1>
          <p data-aos="fade-up" data-aos-delay="100" className=' text-uppercase fs-md3 fw-semibold ff-jost color-white pt-1 text-center'>Learn All The Skills You Need To Become a <span className=' d-sm-block'> Software Engineer!</span></p>
          {/* <ReactPlayer
            className="player mt-3"
            url='https://youtu.be/2cf1JQWZt0g?si=VL4o1AjcPHUD6XPl'
            controls
            volume={0.8}
            muted={false}
            loop={true}
            playbackRate={1}
            width="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
            }}
          /> */}
          <div className='w-100 position-relative'>
            <img src={arrow} alt="img" className=' position-absolute arrow1 d-md-block d-none' />
            <img data-aos-delay="100" data-aos="zoom-in" src={imgvideo} alt="img" className=' w-100 player' />
          </div>
          <div className=' d-flex flex-column d-inline-block position-fixed z-2 mx-auto mt-4 mt-md-0 gap-2 py-2 px-2 bg-white box-absolute'>
            <a target='_blank' href="https://twitter.com/"> <Twitter /></a>
            <a target='_blank' href="https://instagram.com/">  <Insta /></a>
            <a target='_blank' href="https://telegram.com/"> <Telegram /></a>
            <a target='_blank' href="https://linkedin.com/"> <CircularLinkedin /></a>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" className=' d-flex flex-column align-items-center justify-content-center'>
        <p className=' text-uppercase fs-md3 fw-semibold text-center px-2 ff-jost mb-2 color-white mt-4'>Become a <span className=' color-gradient'> Software </span>Engineer Now!</p>
        <p className=' color-grey2 ff-jost fw-normal mb-4 pb-2'>No Math or Science Background Needed</p>
        <Commonbtn />
      </div>
    </>
  )
}

export default Hero   