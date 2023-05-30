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
    <Navbar />
      <Parallax pages={5}>

        <ParallaxLayer offset={0} speed={0}>
          <div className="full-height">
              <Header />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={.999} speed={0.5}>
              <Services />
        </ParallaxLayer>

        <ParallaxLayer offset={1.40} speed={0.5}>
              <About />
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={0.5}>
              <Contact />
        </ParallaxLayer>

        <ParallaxLayer offset={3.0} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
