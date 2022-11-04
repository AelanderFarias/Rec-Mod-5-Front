import React from "react";

export default function VerViagem() {
    const {id} = useParams();
    const [destino, setDestino] = useState('');
    const [partida, setPartida] = useState('');
    const [transporte, setTransporte] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        carregaViagem();
    }, [])

    const carregaViagem = async () => {
        const result = await axios.get(`http://localhost:8080/api/viagens/${id}`)
        setDestino(result.data.destino)
        setPartida(result.data.partida)
        setTransporte(result.data.transporte)
        setValor(result.data.valor)
    }

    return (
        <div>
            <div className="containerBarra">
                <h2>
                    Viagem
                </h2>
                <h6>ID: {id} </h6>
                <div className="card">
                    <div className="card text-center">
                        <div className="card-header">
                            <div className="card-body">
                                <p className="card-title"><b>Destino: </b> {destino} </p>
                                <p className="card-title"><b>Partida: </b> {partida} </p>
                                <p className="card-title"><b>Transporte: </b> {transporte} </p>
                                <p className="card-title"><b>Valor: </b> {valor} </p>
                                <Link to="/contato" className="btn btn-outline-success">Voltar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}