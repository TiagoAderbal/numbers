import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './section.css';

function Section() {
    return (
        <div className='container' id='about'>
            <div className='title-about'>
                <h1 className='pb-4 title-about'>Sobre a Empresa</h1>
                <img className='img-about' src='./logo.png' alt='logo seção sobre'></img>
            </div>
            <div className='row txt-about pt-5'>
                <div className='col'>
                    <h1><b>Empresa</b></h1>
                    <p className='txt-1'>
                        A Numb3rs foi criada em junho de 2015 com o objetivo de desenvolver produtos analíticos para a área da saúde e educacional.
                        <br />
                        <br />
                        A ”Numb3rs”, oferece aos seus clientes ferramentas e metodologias de modo fácil e simples. Integra todos os seus dados e 
                        bases abertas, transforma-os em conhecimento e proporciona uma visão holística do seu negócio. O desafio da Numb3rs é 
                        sensibilizar as organizações para a importância da informação como um ativo estratégico, investindo na qualidade dos dados,
                         de forma a transformar suas decisões do modelo “baseado em sentimentos” para o modelo “baseado em dados”.
                    </p>
                </div>
                <div className='col'>
                    <h1><b>Nossos Profissionais</b></h1>
                </div>
                <div className='col'>
                    <h1><b>Nosso Diferencial</b></h1>
                </div>
            </div>
        </div>
    );
}

export default Section;