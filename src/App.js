import './App.css';
import './components/navbar.js';
import './components/about.js';
import './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar.js';
import About from './components/about.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container-fluid' id='banner'>
        <img className='container-fluid' src='./slide_dbsaude.jpg' alt=''></img>
      </div>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;