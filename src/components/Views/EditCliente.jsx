import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function EditaCliente() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');

    const editar = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/clientes/${id}`, {
            primeiroNome: nome,
            ultimoNome: sobrenome,
            email: email,
        }).then((result) => {
            alert("Cliente Atualizado!");
            navigate("/contato")
        }).catch((erro) => {
            console.log(erro);
        })
    };

    useEffect(() => {
        carregaCliente();
    }, [])

    const carregaCliente = async () => {
        const result = await axios.get(`http://localhost:8080/api/clientes/${id}`)
        setNome(result.data.primeiroNome)
        setSobrenome(result.data.ultimoNome)
        setEmail(result.data.email)
    }

    return (
        <div>
            <div className="containerBarra">
                <h2>
                    Atualização de Cliente
                </h2>
            </div>
            <div className="container">
                <div className="form">
                    <label for="formControlInput" className="form-label">Primeiro Nome </label>
                    <input className="form-control" type="text" placeholder="Primeiro Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <br />
                    <label for="formControlInput" className="form-label">Ultimo Nome </label>
                    <input className="form-control" type="text" placeholder="Ultimo Nome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                    <br />
                    <label for="FormControlInput" className="form-label">Seu E-mail</label>
                    <input type="email" className="form-control" placeholder="nome@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <button className="btn btn-primary" onClick={editar}>Salvar</button>
                    <Link to="/contato" className="btn btn-warning mx-2">Cancelar</Link>

                </div>
            </div>
        </div>
    )
}