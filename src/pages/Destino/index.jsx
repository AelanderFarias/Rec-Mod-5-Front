import React from "react";
import ImgCampinas from "../../assets/img/campinas.jpg";
import ImgSRS from "../../assets/img/SantaRitaSapucai.jpg";
import ImgUFRJ from "../../assets/img/ufrj.jpg";
import ImgTecPUC from "../../assets/img/tecnopuc.jpg";
import ImgMIT from "../../assets/img/mit.jpg";
import ImgSPV from "../../assets/img/sanPedroValley.jpeg";
import ImgPD from "../../assets/img/portoDigital.jpg";


export default function Destino() {
    return (
        <div>
            <div className="containerBarra">
                <h2>
                    Selecionamos os destinos mais compativeis para o time de T.I.
                </h2>
            </div>

            <div className="container">

                <div className="card bg-dark text-black">
                    <img src={ImgMIT} className="card-img" alt="MIT" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">MIT</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgCampinas} className="card-img" alt="campinas" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Campinas</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgPD} className="card-img" alt="portoDigital" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Porto Digital</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgSPV} className="card-img" alt="sanPedroValley" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">San Pedro Valley</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgSRS} className="card-img" alt="Santa Rita do Sapucai" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Santa Rita do Sapucai</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgTecPUC} className="card-img" alt="tecnopuc" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">TecnoPUC</h5>
                    </div>
                </div>
                <br />
                <div className="card bg-dark text-black">
                    <img src={ImgUFRJ} className="card-img" alt="UFRJ" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">UFRJ</h5>
                    </div>
                    <hr />
                </div>
            </div>

        </div>
    )
}