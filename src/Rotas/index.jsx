import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Destino from "../pages/Destino";
import Promocoes from "../pages/Promocoes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VerCliente from "../components/Views/ViewCliente";
import EditaCliente from "../components/Views/EditCliente";
import VerViagem from "../components/Views/ViewViagem";
import EditaViagem from "../components/Views/EditViagem";

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/destino" element={<Destino />} />
                    <Route path="/promocoes" element={<Promocoes />} />
                    <Route path="/EditaCliente/:id" element={<EditaCliente/>} />
                    <Route path="/VerCliente/:id" element={<VerCliente/>} />
                    <Route path="/EditaViagem/:id" element={<EditaViagem/>} />
                    <Route path="/VerViagem/:id" element={<VerViagem/>} />
                    <Route path="*" element={<h1>Página não encontrada</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}