
import './App.css';
import Header from './container/header/header';
import About from './container/about/about';
import { Navbar } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
