import React from "react";
import Logo from "../../assets/img/logo.png";
import ImgDestino from "../../assets/img/icone-destino.png";
import ImgPromo from "../../assets/img/icone-promocoes.png";
import ImgContato from "../../assets/img/icone-contato.png";
import ImgHome from "../../assets/img/house-solid.svg";
import "./style.css"
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} className="img-fluid" alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/">
                                 <img src={ImgHome} alt="Home" className="iconeNavBar" />
                                    Inicio
                                </Link>
                                <Link className="nav-link" to="/destino">
                                    <img src={ImgDestino} alt="Destino" className="iconeNavBar" />
                                    Destino
                                </Link>
                                <Link className="nav-link" to="promocoes">
                                    <img src={ImgPromo} alt="promocoes" className="iconeNavBar" />
                                    Promoções
                                </Link>
                                <Link className="nav-link " to="contato">
                                    <img src={ImgContato} alt="Contato" className="iconeNavBar" />
                                    Contato
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}