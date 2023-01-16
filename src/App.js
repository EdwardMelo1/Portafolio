import Header from './View/Header';
import Main from './View/Main';
import Footer from './View/Footer';
import About from './View/About';
import Portfolio from './View/Portfolio';
import Contact from './View/Contact';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      
      <Header/>
      <Main/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
