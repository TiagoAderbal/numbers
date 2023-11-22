import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './section.css';

function Section() {
    return (
        <div className='container' id='about'>
            <div className='title-about'>
                <h1 className='pb-4 title-about'>Sobre a Empresa</h1>
                <img className='img-about mb-5' src='./logo.png' alt='logo seção sobre'></img>
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
                    <p className='txt-1'>
                        Nossa equipe é formada por profissionais sêniores com solida formação acadêmica e profissional.
                        <br />
                        <br />
                        A soma dos conhecimentos técnicos adquirido do mestrado e doutorado da USP, mais o anos de trabalho nos segmentos de saúde,
                        financeiro e educacional, nos proporciona um inestimado valor de conhecimento que compartilhamos com nossos clientes nos projetos.
                    </p>
                </div>
                <div className='col'>
                    <h1><b>Nosso Diferencial</b></h1>
                    <p className='txt-1'>
                        É a experiência na integração e cleaning dos dados, de forma a construir uma base integra desses dados e os mesmos servirem como
                        uma fonte confiável para a analise. Assim sendo, a normalização, governança e arquitetura são fundamentais para a construção dos
                        modelos analíticos de forma a terem uma performance compatível com a necessidade do negocio, ressaltando sempre que os requisitos
                        do negocio, vão definir a estrutura da base de dados.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section;