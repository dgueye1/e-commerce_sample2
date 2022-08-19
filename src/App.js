import './App.css';
import Navigation from './NavComponent/Nav';
import Slideshow from './Slideshow/Slideshow';
import Inventory from './Inventory/Inventory';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <div className="App">
      <header>
      <div className="Navigation">
        <Navigation />
      </div>
      </header>
    <br/>
    <div className='invenntory'>
      <Inventory />
    </div>

    <div className= "slideshow">
      <Slideshow />
    </div>
    <br/>
    <br/>
    </div>
  );
}

export default App;
