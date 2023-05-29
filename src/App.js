import './App.scss';
import { useRef } from 'react'
import Header from './container/header/header';
import Services from './container/services/services';
import About from './container/about/about';
import Contact from './container/contact/contact';
import Footer from './container/footer/footer';
import { Navbar } from './components'
import { IntersectionObserverProvider } from 'react-intersection-observer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();
  return (
    <div className='app'>
      <Parallax pages={5}>

        <ParallaxLayer offset={0} speed={0}>
          <div className="full-height">
              <Header />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={.999} speed={0.5}>
          <div className="full-height">
              <Services />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.60} speed={0.5}>
          <div className="full-height">
              <About />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.30} speed={0.5}>
          <div className="full-height">
              <Contact />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.0} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
