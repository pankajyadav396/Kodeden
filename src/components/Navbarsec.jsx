import React, { useState } from 'react'
import logo from '../assets/images/webp/logo.webp'
const Navbarsec = () => {
  const [nav, setNav] = useState(false)
  function show() {
    setNav(!nav)
    if (nav === false) {
      document.body.classList.add("overflow-max-hidden")
      document.getElementById('menu').classList.add("menu-opened");
    }
    else {
      document.body.classList.remove("overflow-max-hidden")
      document.getElementById('menu').classList.remove("menu-opened");

    }
  };
  return (
    <>
      <div className='h-90 w-100 d-flex align-items-center'>
        <div className='h-100 container-lg max-w-1140 justify-content-between d-flex align-items-center'>
          <img src={logo} alt="image" className='cursor-pointer logo d-inline' />
          <div className='d-flex gap-4 align-items-center'>
            <ul className={`${nav ? "open" : "not-open"
              } d-flex justify-content-center align-items-center m-0 p-0 gap-32 mobileView`}>
              <li><a onClick={show} href="#home" className='home fs-sm1 fw-medium ff-jost color-grey lh-24 text-decoration-none list-unstyled'>Home</a></li>
              <li><a onClick={show} href="#aboutus" className='home fs-sm1 fw-medium ff-jost color-grey lh-24 text-decoration-none list-unstyled'>About</a></li>
              <li><a onClick={show} href="#services" className='home fs-sm1 fw-medium ff-jost color-grey lh-24 text-decoration-none list-unstyled'>Program</a></li>
              <li><a onClick={show} href="#choose" className='home fs-sm1 fw-medium ff-jost color-grey lh-24 text-decoration-none list-unstyled'>How it works</a></li>
              <li><a onClick={show} href="#faqs" className='home fs-sm1 fw-medium ff-jost color-grey lh-24 text-decoration-none list-unstyled'>FAQs</a></li>
              <li onClick={show} className='ms-2 d-sm-none'><button className=' btn-started color-white fw-900 ff-jost fs-sm'>Get Started</button></li>
            </ul>
            <li className='ms-2 d-none d-sm-block'><button className=' btn-started color-white fw-900 ff-jost fs-sm'>Get Started</button></li>
            <label className='cursor-pointer' id='menu' onClick={show}>
              {nav ? (
                <div id='menu' className='relative z-40 mt-2'>
                  <span className=' span1'></span>
                  <span className=' span2'></span>
                  <span className=' span3'></span>
                </div>
              ) : (
                <div className='relative z-40 mt-2'>
                  <span className=' span4'></span>
                  <span className='span5'></span>
                  <span className=' span6'></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbarsec