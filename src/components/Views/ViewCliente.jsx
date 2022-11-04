import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function VerCliente() {

    const {id} = useParams();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');

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
                    Cliente
                </h2>
                <h6>ID: {id} </h6>
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            <div className="card-body">
                                <p className="card-title"><b>Nome: </b> {nome} </p>
                                <p className="card-title"><b>Sobrenome: </b> {sobrenome} </p>
                                <p className="card-title"><b>Email: </b> {email} </p>
                                <Link to="/contato" className="btn btn-outline-success">Voltar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}