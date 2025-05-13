
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
// import LoginPage from "./LoginPage";
// import DashboardPage from "./DashboardPage";
// import BoletosPage from "./BoletosPage";
// import AntecipacaoPage from "./AntecipacaoPage";
// import ObrasPage from "./ObrasPage";
// import AssistenciaPage from "./AssistenciaPage";
// import DocumentosPage from "./DocumentosPage";
// import AdminUsuarios from "./AdminUsuarios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/boletos" element={<BoletosPage />} />
        <Route path="/antecipacao" element={<AntecipacaoPage />} />
        <Route path="/obras" element={<ObrasPage />} />
        <Route path="/assistencia" element={<AssistenciaPage />} />
        <Route path="/documentos" element={<DocumentosPage />} />
        <Route path="/admin" element={<AdminUsuarios />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
