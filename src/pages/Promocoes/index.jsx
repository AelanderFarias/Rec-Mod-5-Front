import React from "react";
import ImgCampinas from "../../assets/img/campinas.jpg";
import ImgSRS from "../../assets/img/SantaRitaSapucai.jpg";
import ImgUFRJ from "../../assets/img/ufrj.jpg";
import ImgTecPUC from "../../assets/img/tecnopuc.jpg";
import { Link } from "react-router-dom";



export default function Promocoes() {
    return (
        <div>

            <div className="containerBarra info-promocao">
                <h2>As melhores promoções para profissionais de Tecnologia
                </h2>

                <br />

                <h5>
                    Profissional de Tecnologia, viaje para lugares inpiradores da sua área de atuação
                </h5>
            </div>


            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={ImgCampinas} className="card-img" alt="Campinas" />
                            <div className="card-body">
                                <h5 className="card-title">Campinas</h5>
                                <p className="card-text">A cidade de Campinas, no interior de São Paulo, conta com vários parques tecnológicos,
                                    institutos de pesquisa e incubadoras. A região abriga mais de 30 das 100 maiores empresas de tecnologias
                                    do mundo, além do CPQD (Centro de Pesquisa e Inovação em Tecnologias da Informação e Comunicação).</p>
                                <ul>
                                    <li>Hotel</li>
                                    <li>Café da manhã</li>
                                    <li>Passagem Aérea</li>
                                </ul>
                                <div className="valor">
                                    <span>
                                        De
                                    </span>
                                    <span className="precoRiscado">
                                        R$ 2000
                                    </span>
                                    <span>
                                        Por
                                    </span>
                                    <span className="precoAtualizado">
                                        R$ 1800
                                    </span>

                                </div>
                                <Link className="btn btn-primary" to="/contato">
                                    Quero Viajar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ImgSRS} className="card-img d-flex" alt="Santa Rita do Sapucaí" />
                            <div className="card-body">
                                <h5 className="card-title">Santa Rita do Sapucaí</h5>
                                <p className="card-text">Localizada em Minas Gerais, a cidade é considerada um dos principais polos da indústria
                                    eletrônica no país. A região tem mais de 150 fábricas, 31 empresas em programas de incubação e três
                                    incubadoras. Teve uma receita de R$ 3,2 bilhões em 2017.</p>
                                <ul>
                                    <li>Hotel</li>
                                    <li>Café da manhã</li>
                                    <li>Passagem Aérea</li>
                                </ul>
                                <div className="valor">
                                    <span>
                                        De
                                    </span>
                                    <span className="precoRiscado">
                                        R$ 2000
                                    </span>
                                    <span>
                                        Por
                                    </span>
                                    <span className="precoAtualizado">
                                        R$ 1800
                                    </span>

                                </div>
                                <Link className="btn btn-primary" to="/contato">
                                    Quero Viajar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ImgUFRJ} className="card-img" alt="Universidade Federal do Rio de Janeiro" />
                            <div className="card-body">
                                <h5 className="card-title">Universidade Federal do Rio de Janeiro</h5>
                                <p className="card-text">O Rio de Janeiro também conta com um parque tecnológico. Ele faz parte da Universidade
                                    Federal do Rio de Janeiro (UFRJ), permitindo a interação entre a universidade e as empresas. Abriga 68
                                    instituições, sendo centros de pesquisa de 14 empresas de grande porte nacionais e multinacionais, 12
                                    pequenas e médias, além de 10 laboratórios da própria UFRJ e 31 startups.</p>
                                <ul>
                                    <li>Hotel</li>
                                    <li>Café da manhã</li>
                                    <li>Passagem Aérea</li>
                                </ul>
                                <div className="valor">
                                    <span>
                                        De
                                    </span>
                                    <span className="precoRiscado">
                                        R$ 2000
                                    </span>
                                    <span>
                                        Por
                                    </span>
                                    <span className="precoAtualizado">
                                        R$ 1800
                                    </span>

                                </div>
                                <Link className="btn btn-primary" to="/contato">
                                    Quero Viajar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={ImgTecPUC} className="card-img" alt="Tecnopuc" />
                            <div className="card-body">
                                <h5 className="card-title">Tecnopuc</h5>
                                <p className="card-text">Tecnopuc é o parque científico e tecnológico da PUCRS e está localizado em Porto
                                    Alegre. Abriga mais de 170 organizações, somando mais de sete mil postos de trabalho.</p>
                                <ul>
                                    <li>Hotel</li>
                                    <li>Café da manhã</li>
                                    <li>Passagem Aérea</li>
                                </ul>
                                <div className="valor">
                                    <span>
                                        De
                                    </span>
                                    <span className="precoRiscado">
                                        R$ 2000
                                    </span>
                                    <span>
                                        Por
                                    </span>
                                    <span className="precoAtualizado">
                                        R$ 1800
                                    </span>

                                </div>
                                <Link className="btn btn-primary" to="/contato">
                                    Quero Viajar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
