import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';
import logo from './assets/images/webp/logo.webp'
import Backtotop from './components/Backtotop';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 2000);
  }, [])


  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    })
  }, [])

  return (
    <>
      {loader ? (<div className=' bg-black position-fixed d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 bottom-0 end-0 start-0 z-3'>
        <img src={logo} alt="" width={150} className='anime-bounce' />
        <div className="loader mt-5"></div>
      </div >) : (
        <div className=' position-relative overflow-xclip main-body'>
          <Backtotop />
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App