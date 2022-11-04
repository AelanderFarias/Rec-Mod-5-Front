import React from "react";
import ImgMIT from "../../assets/img/mit.jpg";
import ImgSPV from "../../assets/img/sanPedroValley.jpeg";
import ImgPD from "../../assets/img/portoDigital.jpg";
import "./style.css";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <section className="containerBarra titulo-mais-visitados">
                <h2>Viagens para os maiores pólos de inovações tecnológicas</h2>
                <h4>A agência de viagens que te leva para onde a tecnologia está.</h4>
            </section>
            <div className="homeIntro">
                <h2>
                    Os lugares mais procurados pelos profissionais de TI
                </h2>
            </div>
            <article id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={ImgMIT} alt="MIT" className="mit" />
                        </div>
                        <div className="col-lg-6">
                            <h4>
                                #1° Lugar
                            </h4>
                            <p>MIT - Massachusetts Institute of Technology - Massachusetts - EUA</p>
                            <p>Paraíso dos nerds, o Massachusetts Institute of Technology (MIT) se destaca por aliar um ensino de
                                tecnologia de ponta a noções de administração. União ideal para engenheiros, cientistas da computação e
                                outros profissionais da tecnologia que pretendem investir em seu próprio negócio.</p>
                            <Link to="/contato" className="linkPrice">
                                <h5 className="price">R$ 7.000 em até 10x</h5>
                                <h6>7 dias com hospedagem</h6>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <h4>
                                #2° Lugar
                            </h4>
                            <p>San Pedro Valley - MG - Brasil</p>
                            <p>San Pedro Valley é conhecido como o Vale do Silício de Belo Horizonte/MG.
                                <br />
                                A comunidade surgiu em 2011 com a união de empreendedores à frente das startups Beved, Deskmetrics,
                                Everwrite e Hotmart.
                                <br />
                                Hoje, já conta com mais de 200 empresas de tecnologia e inovação, com alto potencial de crescimento.
                            </p>
                            <Link to="/contato" className="linkPrice">
                                <h5 className="price">R$ 3.000 em até 10x</h5>
                                <h6>7 dias com hospedagem</h6>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <img src={ImgSPV} alt="San Pedro Valley" className="sanPedroValley" />
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img src={ImgPD} alt="Porto Digital" className="portoDigital" />
                        </div>
                        <div className="col-lg-6">
                            <h4>
                                #3° Lugar
                            </h4>
                            <p>Porto digital - Pernambuco - Brasil</p>
                            <p>O Porto Digital é o polo de inovação mais famoso do nordeste brasileiro, localizado em Recife/PE.
                                <br />
                                Ele abriga mais de 250 empresas e startups ligadas à tecnologia e economia criativa, além de empregar mais
                                de 7 mil pessoas.
                                <br />
                                Em 2017, foi eleito o melhor parque tecnológico/habit de inovação do Brasil pela Associação Nacional de
                                Entidades Promotoras de Empreendimentos Inovadores (Anprotec).
                            </p>
                            <Link to="/contato" className="linkPrice">
                                <h5 className="price">R$ 2.500 em até 10x</h5>
                                <h6>7 dias com hospedagem</h6>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </article>
        </div>
    )
}