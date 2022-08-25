import './sass/main.scss'
import './css/base_fonts/typography.css'


//Components
import Header from './components/Header';
import About from './components/About';
import Concept from './components/Concept';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Legend from './components/Legend';

function App() {
  return (
    <div className="App">
      <Header/>
      <Legend/>
      <About/>
      <Concept/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
