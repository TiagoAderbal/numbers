import './App.css';
import './components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='banner1 row container-fluid'>
        <p className='col-6 text-banner'>Sejam bem-vindos</p>
        <img className='col-5 scale-up-center' src='./banner.svg' alt=''></img>
      </div>
    </div>
  );
}

export default App;