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

      <BeerCard cardTitle="IPA Classic" description="A hoppy and refreshing India Pale Ale." />
      <BeerCard cardTitle="Stout Supreme" description="A rich and creamy dark beer with hints of chocolate." />
      <BeerCard cardTitle="Lager Light" description="A crisp and smooth lager, perfect for any occasion." />
    </>
  );
}

export default App;
