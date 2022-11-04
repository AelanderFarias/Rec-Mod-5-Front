import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditaViagem() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [destino, setDestino] = useState('');
    const [partida, setPartida] = useState('');
    const [valor, setValor] = useState('');
    const [transporte, setTransporte] = useState('');

    const editar = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/viagens/${id}`, {
            destino: destino,
            partida: partida,
            valor: valor,
            transporte: transporte,
        }).then((result) => {
            alert("Viagem Atualizado!");
            navigate("/contato")
        }).catch((erro) => {
            console.log(erro);
        })
    };

    useEffect(() => {
        carregaViagem();
    }, [])

    const carregaViagem = async () => {
        const result = await axios.get(`http://localhost:8080/api/viagens/${id}`)
        setDestino(result.data.destino)
        setPartida(result.data.partida)
        setValor(result.data.valor)
        setTransporte(result.data.transporte)
    }

    return (
        <div>
            <div className="containerBarra">
                <h2>
                    Atualização de Viagem
                </h2>
            </div>
            <div className="container">
                <div className="form">
                    <label for="formControlInput" className="form-label">
                        Destino{" "}
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Destino"
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                    />
                    <br />
                    <label for="formControlInput" className="form-label">
                        Partida{" "}
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Partida"
                        value={partida}
                        onChange={(e) => setPartida(e.target.value)}
                    />
                    <br />
                    <label for="FormControlInput" className="form-label">
                        Transporte
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Transporte"
                        value={transporte}
                        onChange={(e) => setTransporte(e.target.value)}
                    />
                    <br />
                    <label for="FormControlInput" className="form-label">
                        Valor
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Valor da Viagem"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                    <br />

                    <button className="btn btn-primary" onClick={editar}>
                        Salvar Minha Viagem
                    </button>
                    <Link to="/contato" className="btn btn-warning mx-2">
                        Cancelar
                    </Link>
                </div>
            </div>
        </div>
    )
}