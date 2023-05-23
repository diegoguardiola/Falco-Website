import './App.scss';
import Header from './container/header/header';
import Services from './container/services/services';
import About from './container/about/about';
import { Navbar } from './components'
import { IntersectionObserverProvider } from 'react-intersection-observer';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <Services />
        <About />
    </div>
  );
}

export default App;
