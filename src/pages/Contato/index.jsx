import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Contato() {
    const {id} = useParams();
    const deletaCliente = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/clientes/${id}`).then((response) => {
                alert("Cliente Excluido.");
                listarClientes();
            })  
        } catch (erro) {
            alert(erro.message)
        }
    }
    const deletaViagem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/viagens/${id}`).then((response) => {
                alert("Viagem Excluida.");
                listarViagens();
            })  
        } catch (erro) {
            alert(erro.message)
        }
    }


    const [clientes, setClientes] = useState([]);

    const listarClientes = async () => {
        try {
            await axios.get("http://localhost:8080/api/clientes").then((response) => {
                setClientes(response.data);
            });
        } catch (erro) {
            alert(erro.message);
        }
    };

    useEffect(() => {
        listarClientes();
    }, []);

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");

    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome, sobrenome, email);
        await axios
            .post("http://localhost:8080/api/clientes", {
                primeiroNome: nome,
                ultimoNome: sobrenome,
                email: email,
            })
            .then((result) => {
                alert("Cliente Adicionado!");
                navigate("/contato");
            })
            .catch((erro) => {
                console.log(erro);
            });
    };

    const [viagens, setViagens] = useState([]);

    const listarViagens = async () => {
        try {
            await axios.get("http://localhost:8080/api/viagens").then((response) => {
                setViagens(response.data);
            });
        } catch (erro) {
            alert(erro.message);
        }
    };

    useEffect(() => {
        listarViagens();
    }, []);

    const [destino, setDestino] = useState("");
    const [partida, setPartida] = useState("");
    const [transporte, setTransporte] = useState("");
    const [valor, setValor] = useState("");

    const salvarViagem = async (e) => {
        e.preventDefault();
        console.log(destino, partida, transporte, valor);
        await axios
            .post("http://localhost:8080/api/viagens", {
                destino: destino,
                partida: partida,
                transporte: transporte,
                valor: valor,
            })
            .then((result) => {
                alert("Viagem Adicionado!");
                navigate("/contato");
            })
            .catch((erro) => {
                console.log(erro);
            });
    };

    return (
        <div>
            <div className="containerBarra">
                <h2>Entre em contato conosco</h2>
            </div>
            <div className="container">
                <div className="form">
                    <label for="formControlInput" className="form-label">
                        Primeiro Nome{" "}
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Primeiro Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <br />
                    <label for="formControlInput" className="form-label">
                        Ultimo Nome{" "}
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                    <br />
                    <label for="FormControlInput" className="form-label">
                        Seu E-mail
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="nome@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Deixe sua mensagem
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={salvar}>
                        Enviar
                    </button>
                    <Link to="/contato" className="btn btn-warning mx-2">
                        Cancelar
                    </Link>
                </div>
                <div className="containerBarra">
                    <h2>Cadastre sua Viagem</h2>
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

                        <button className="btn btn-primary" onClick={salvarViagem}>
                            Salvar Minha Viagem
                        </button>
                        <Link to="/contato" className="btn btn-warning mx-2">
                            Cancelar
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <h4>Lista de Clientes</h4>
            </div>
            <table className="table table-striped border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">Email</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente, key) => (
                        <tr>
                            <th scope="row" key={key}>
                                {key + 1}
                            </th>
                            <th>{cliente.primeiroNome}</th>
                            <th>{cliente.ultimoNome}</th>
                            <th>{cliente.email}</th>
                            <th>
                                <Link to={`/VerCliente/${cliente.id}`}  className="btn btn-outline-success mx-2">Ver</Link>
                                <Link
                                    to={`/EditaCliente/${cliente.id}`}
                                    className="btn btn-success mx-2"
                                >
                                    Editar
                                </Link>
                                <button className="btn btn-danger mx-2" onClick={() => deletaCliente(cliente.id)}>Excluir</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h4>Lista de Viagens</h4>
            </div>
            <table className="table table-striped border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Destino</th>
                        <th scope="col">Partida</th>
                        <th scope="col">Transporte</th>
                        <th scope="col">Valor</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {viagens.map((viagem, key) => (
                        <tr>
                            <th scope="row" key={key}>
                                {key + 1}
                            </th>
                            <th>{viagem.destino}</th>
                            <th>{viagem.partida}</th>
                            <th>{viagem.transporte}</th>
                            <th>{viagem.valor}</th>
                            <th>
                                <Link to={`/VerViagem/${viagem.id}`} className="btn btn-outline-success mx-2">Ver</Link>
                                <Link to={`/EditaViagem/${viagem.id}`} className="btn btn-success mx-2">Editar</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deletaViagem(viagem.id)}>Excluir</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
