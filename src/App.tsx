import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header company="Morgan's Amazing Company" menu1="Bières" menu2="Contactez-nous" menu3="À propos de nous" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        {/* Faire la page des détails d'une bière */}
      </Routes>
    </>
  );
}

export default App;
