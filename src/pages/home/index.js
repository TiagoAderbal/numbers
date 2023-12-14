import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar.js';
import About from '../../components/about.js';
import Footer from '../../components/footer.js';
import Button from '../../components/button.js';
import Slides from '../../components/slides.js';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <About/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default Home;