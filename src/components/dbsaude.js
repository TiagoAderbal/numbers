import './dbsaude.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Dbsaude() {
    return (
        <div className='dbsaude'>
            <h1 className='title'>Conhecendo o dbSaude</h1>
            <img className='img-logo' src='./logo_db.png' alt=''></img>
            <div className='text container'>
                <p>
                    A Numb3rs está comprometida em ofertar uma forma simples e fácil de nossos
                    clientes analisarem as informações contidas no DATASUS, proporcionando a
                    tomada de decisões assertivas e estratégicas. <br /><br />
                    Aumentar a capacidade de analises das informações, permitindo a realização
                    de benchmarks entre instituições similares, projeções, monitorar indicadores
                    que estão fora dos padrões estabelecidos e acompanhamento de tendência, são
                    as principais características de nossa oferta. <br /><br />
                    Torne-se uma das minorias que conseguem obter vantagem competitiva através
                    de suas próprias informações através do “emponderamento” de sua equipe. <br /><br />
                    O dbSaude, é uma plataforma que tem como principal característica a consolidação
                    e visualização de uma forma estruturada dos dados abertos do Ministério da
                    Saúde, oriundos da produção e apresentação das contas hospitalares ao Sistema
                    Único de Saúde (SUS) de mais de 5.000 Estabelecimentos de Saúde do Brasil.
                </p>
            </div>

            <div className="accordion accordion-flush container" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Proprosição de Valor
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-accordion">
                            O grande diferencial do dbSaude está na simplicidade de seu uso e nas
                            informações financeiras e estratégicas, sendo que os dashboards disponibilizados
                            no produto sinalizam sempre que um desvio de padrão acontece, através de KPIs que
                            indicam os desvios relativos aos padrões estabelecidos de forma que o administrador
                            possa rapidamente tomar ações corretivas.<br /><br />
                            Também oferece um benchmarking com hospitais similares, apontando visualmente as
                            diferenças de comportamento nos itens de faturamento e tempo de permanência. Uma
                            importante função é permitir o usuário criar seus próprios dashboards e análises.<br /><br />
                            Ao consolidarmos estes dados, montamos um grande banco de dados nacional, permitindo
                            realizar análises econômicas e  epidemiológicas.<br /><br />
                            O dbSaude visa substituir o uso do TABwin e TabNet, disponíveis no portal do DATASUS,
                            que são complexos, de difícil visualização e tempo de resposta insatisfatório.<br /><br />
                            Face ao grande esforço operacional para obtenção das informações, por desconhecimento
                            ou por limitações técnicas, os usuários acabam utilizando recursos manuais para a
                            sua transcrição, através de relatórios em PDF, disponibilizados pelos órgãos
                            reguladores. Tal atividade, além de gerar um retrabalho, muitas vezes implica em erros
                            humanos naturais.<br /><br />
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Funções
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-accordion">
                            <ul>
                                <li>
                                    Monitoramento da performance e a prestação de contas junto aos órgãos
                                    financiadores e reguladores, informando de forma visual quaisquer desvios
                                    que possam comprometer as metas definidas pela agências reguladoras e
                                    financeiras (FPO).
                                </li>
                                <li>
                                    Monitoramento da produção hospitalar, seja de pacientes ambulatoriais
                                    (outpatients) ou de pacientes internados (inpatients), exibindo a curva
                                    de tendência e desvios.
                                </li>
                                <li>
                                    Benchmarkings com hospitais similares, ressaltando graficamente seus desvios
                                    de comportamento e permitindo uma comparação financeira entre seus pares, em
                                    um mesmo procedimento ou enfermidade.
                                </li>
                                <li>
                                    Acompanhamento das glosas das contas apresentadas, permitindo um rápido ajuste
                                    dos processos para uma apresentação da conta hospitalar sem erros.
                                </li>
                            </ul>
                            <div className="accordion-body text-accordion">
                                Nossa meta é que, com base nas informações disponibilizadas a instituição possa
                                reduzir custos sem prejudicar a qualidade do atendimento ao paciente.<br /><br />
                                Com o dbSaude é possível converter a grande quantidade de dados disponíveis para
                                a informação em conhecimento valioso e estabelecer uma comunicação rápida e eficaz
                                com dados fáceis de serem interpretados. Assim, a partir de filtros, o processo
                                analítico pode trazer pontos de vista multidimensionais, aprofundamentos, rotação de
                                dados que permitirão não só́ o fornecimento dos dados detalhados para os analistas
                                financeiros e clínicos, mas também o monitoramento do desempenho.<br /><br />
                                Ter um processo analítico das informações da instituição permite entender os
                                acontecimentos passados e fazer previsões sobre o futuro. Seu uso visa a geração
                                de uma inteligência que permita a identificação de problemas e a redução de desperdícios,
                                gerando um impacto direto e significativo nos negócios.<br /><br />
                                Com mecanismos adequados, o dbSaude, quando integrado a outros bancos de dados, poderá
                                contribuir para a gestão da oferta de serviços, do gerenciamento de programas das
                                unidades de saúde, do acompanhamento da situação e o histórico de saúde dos pacientes.
                                A padronização das informações permite a geração de relatórios e indicadores com
                                dados de exames, hábitos alimentares, internações, altas e outras informações sobre
                                os pacientes. Além disso, pode proporcionar ao médico um ganho de agilidade na prestação
                                do serviço e na satisfação dos seus clientes.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Características
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-accordion">
                            As principais características são:
                            <ul>
                                <li>Disponibilizar a base dados SUS sempre atualizada e disponível.</li>
                                <li>Capacidade de se integrar com os dados privados de seu hospital.</li>
                                <li>Visualização Espacial.</li>
                                <li>Granularidade superior a disponibilizada no site do DataSUS.</li>
                                <li>
                                    Serviço oferecido na WEB sem necessidade de investimento de infraestrutura e
                                    especialistas de Base de Dados e TI.
                                </li>
                                <li>Ferramenta de visualização analítica e elaboração de Dashboards extremamente amigáveis.</li>
                                <li>Criação de consultas analíticas, Dashboards e relatórios pelo usuário final.</li>
                            </ul>
                            A ferramenta como já descrito possui a facilidade de criação de consultas e Dashboards de relatórios. <br /><br />
                            Entretanto a mesma já é entregue com as seguintes consultas já implementadas:<br /><br />
                            <ul>
                                <li>Análise das Redes com atendimento ambulatorial e hospitalar.</li>
                                <li>Relatório de diferenças entre os faturamentos mensais FAEC.</li>
                                <li>Relatório de Metas Físicas – Atendimentos contratados pelo SUS – SP</li>
                                <ul>
                                    <li>Metas Ambulatoriais.</li>
                                    <li>Metas Internação – Numero de AIHs conveniadas pelo SUS por especialidade.</li>
                                </ul>
                                <li>Análise Ambulatorial.</li>
                                <li>Análise das internações.</li>
                                <li>Cruzamento das informações Ambulatoriais e Internações.</li>
                                <li>Avaliação do cadastro nacional de estabelecimentos de saúde.</li>
                                <li>Benchmark entre os indicadores do Hospital e média nacional.</li>
                            </ul> <br />
                            Funções analíticas já implementadas:<br /><br />
                            <ul>
                                <li>Classificação Regional e Nacional</li>
                                A  ferramenta  permite  à  unidade  de  saúde  verificar  seus  dados,  tanto financeiros
                                como  epidemiológicos  em  confronto  com  a realidade  nacional  e regional. Dessa forma
                                é possível fazer comparativos de produção hospitalar e produção ambulatorial com outras
                                unidades espalhadas pela federação. <br/><br/>
                                <li>Classificação por Porte e Semelhança</li>
                                A  ferramenta  automaticamente  sugere  grupos  de  unidades  que  mantém semelhança  com
                                a  unidade  identificada  para  avaliações  de  produção  e epidemiológicas. O usuário pode
                                também manualmente selecionar unidades que deseja comparar. Os comparativos podem ser gerado
                                a qualquer tempo sem a necessidade de personalização do produto.<br/><br/>
                                <li>Evolução do Desempenho</li>
                                Com uma série temporal que se inicia junto da entrada em vigor do Sistema de Gerenciamento 
                                da Tabela Unificada (SIGTAP)  é  possível  fazer  análises de  desempenho  iniciados  em  
                                2008  até  a  data  da  última  apresentação liberada pelo Ministério da Saúde.<br/><br/>
                                <li>Perfil do Atendimento</li>
                                Utilizando-se dos dados anonimizados será possível conhecer detalhes do seu atendimento como 
                                invasão municipal, evasão, atendimentos fora da área especifica, principais  área  de  
                                deslocamento e  deslocamentos  mais  longos, entre outros.<br/><br/>
                                <li>Distribuição dos Atendimentos</li>
                                Conhecer a epidemiologia da sua porta de entrada é um dos desafios diário do gestor de saúde. 
                                Com a série histórica disponível é possível conhecer as sazonalidades da região e da sua unidade, 
                                permitindo ao gestor um planejamento prévio.<br/><br/>
                                <li>Prioridades Estratégicas</li>
                                Através  do  conhecimento  dos  pontos  fortes  e  fracos  de  cada  unidade  é possível  fazer  
                                um  planejamento  estratégico  de  crescimento  de  forma  a amplificar as virtudes e mitigar os riscos.<br/><br/>
                            </ul>
                            Outra oferta aos nossos clientes é a disponibilização de informações para tomada de decisão a 
                            partir de arquivos já processados e “descartáveis”.  Utilizamos um conceito de “reuso do dado”, 
                            pois muitos destes arquivos são armazenados, porém ficam esquecidos em uma determinada área ocupando 
                            espaço. Nossa estratégia é a captação destes dados “esquecidos” e transformá-los em informações úteis 
                            que poderão contribuir para ações inteligentes.<br/><br/>
                            As principais características são:
                            <ul>
                                <li>Solução de baixo custo.</li>
                                <li>Não exige esforço da equipe de TI.</li>
                                <li>Não exige investimento em infraestrutura.</li>
                                <li>Disponibilidade de Dashboards independente dos sistemas transacionais.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dbsaude;