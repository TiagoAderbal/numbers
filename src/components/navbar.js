import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="#navbar">
                    <img src='./logo.png' alt='logotipo da empresa' className='logo_nav'></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar-nav'>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#navbar">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#navbar">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#navbar">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#navbar">Serviços</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;