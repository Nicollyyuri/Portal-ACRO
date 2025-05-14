import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from './paginas/IndexPage';
import LoginPage from './paginas/LoginPage';
import DashboardPage from './paginas/DashboardPage';
import BoletosPage from './paginas/BoletosPage';
import AntecipacaoPage from './paginas/AntecipacaoPage';
import ObrasPage from './paginas/ObrasPage';
import AssistenciaPage from './paginas/AssistenciaPage';
import DocumentosPage from './paginas/DocumentosPage';
import AdminUsuarios from './paginas/AdminUsuarios';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/boletos" element={<BoletosPage />} />
        <Route path="/antecipacao" element={<AntecipacaoPage />} />
        <Route path="/obras" element={<ObrasPage />} />
        <Route path="/assistencia" element={<AssistenciaPage />} />
        <Route path="/documentos" element={<DocumentosPage />} />
        <Route path="/admin" element={<AdminUsuarios />} />
      </Routes>
    </Router>
  );
};

export default App;
