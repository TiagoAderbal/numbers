import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './section.css';

function Section() {
    return (
        <div className='container'>
            <div className='row' id='sect'>
                <img className='col-6-lg' id='img-sect1' src='./estet.jpg' alt=''></img>
                <div className='col-4-lg' id='txt-sect1'>
                    <h3><b>Saúde</b></h3>
                    <p>Obtenha informações estratégicas a partir dos dados do SUS, otimize sua pesquisa clínica e melhore a gestão de seu serviço de saúde.</p>
                </div>
            </div>
            {/* <div className='row first-sec pt-5' id='sect'>
                <div className='col-6' id='txt-sect2'>
                    <h3><b>Educação</b></h3>
                    <p>Extraia informações de seus sistemas educacionais presenciais ou à distância, otimize a gestão de seus cursos e melhore os resultados de sua instituição.</p>
                </div>
                <img className='col-6' id='img-sect1' src='./book.jpg' alt=''></img>
            </div>
            <div className='row first-sec pt-5' id='sect'>
                <img className='col-6' id='img-sect1' src='./company.png' alt=''></img>
                <div className='col-7' id='txt-sect1'>
                    <h3><b>Empresarial</b></h3>
                    <p>Tome decisões gerenciais baseadas em análise de big data e melhore os resultados de sua empresa de forma concreta.</p>
                </div>
            </div> */}
        </div>
    );
}

export default Section;