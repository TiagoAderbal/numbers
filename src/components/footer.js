import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './footer.css';

function Footer() {
    return (
        <div className='container-fluid' id='footer'>
            <div className='pt-4 pb-3'>
                <img className='logo-foot' src='./logo-1.png' alt=''></img>
            </div>
            <div className='row container-fluid d-flex'>
                <div className='col-5 pt-4' id='txt-foot'>
                    <h1>Sobre nós</h1>
                    <p>A Numb3rs Analytics foi criada com a missão de proporcionar aos nossos clientes ferramentas e metodologias de forma a integrar todos os seus dados de modo rápido, fácil e simples, transformando-o em conhecimento e proporcionando uma visão holística do seu negócio.</p>
                </div>
                <div className='col-4 pt-4'>
                    <h1>Como podemos lhe ajudar?</h1>
                    <h4>(11)94125-7849</h4>
                    <a className='link-foot' href='mailto:vendas@numb3rs.com.br'>vendas@numb3rs.com.br</a>
                </div>
                <div className='col-2 pt-4'>
                    <img className='icons-foot' src='./face-icon.png' alt=''></img>
                    <img className='icons-foot' src='./insta-icon.png' alt=''></img>
                    <img className='icons-foot' src='./linkedin-icon.png' alt=''></img>
                    <img className='icons-foot' src='./youtube-icon.png' alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;