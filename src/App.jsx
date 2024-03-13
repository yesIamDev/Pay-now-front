import { Suspense } from "react";
import "./App.css";
import Layout from "./components/shared/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Dashboard from "./pages/Dash/Dashboard";
import Teacher from "./pages/Teacher/Teacher";
import Cours from "./pages/Cours/Cours";
import Paiement from "./pages/Paiement/Paiement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/paiements" element={<Paiement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
