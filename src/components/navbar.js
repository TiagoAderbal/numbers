import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className='container-fluid'>
                <div className="navbar-brand">
                    <Link to="/">
                        <img
                            src='./logo.png'
                            alt='logotipo da empresa'
                            className='logo_nav'>
                        </img>
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar-nav'>
                        <li className="nav-item" id='nav-item'>
                            <Link to='/' className="nav-link active" aria-current="page">Início</Link>
                        </li>
                        <li className="nav-item dropdown" id='nav-item'>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#navbar" role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Produtos
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to='/produtos' className="dropdown-item">DBSaúde</Link></li>
                                <li><a
                                    className="dropdown-item"
                                    href="https://clipping.balancopadrao.com.br/"
                                    target='blank'>
                                    DBResumo
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item" id='nav-item'>
                            <Link to="/contato" className="nav-link" aria-current="page">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;