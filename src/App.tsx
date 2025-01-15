import "./App.css";
import "./components/Button.css";
import "./components/Header.css";
import Button from "./components/Button";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";

function App() {
  return (
    <>
      <Header company="Morgan's Amazing Company" menu1="Accueil" menu2="Contactez-nous" menu3="À propos de nous" />
      <h1>Mon premier composant</h1>
      <Button title="Mon bouton" text="Test bouton" />

      <BeerCard/>
    </>
  );
}

export default App;
