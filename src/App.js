import './App.css';
import './components/navbar.js';
import './components/section.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar.js';
import Section from './components/section.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container-fluid' id='banner'>
        <img className='container-fluid' src='./slide_dbsaude.jpg' alt=''></img>
      </div>
      <Section></Section>
    </div>
  );
}

export default App;