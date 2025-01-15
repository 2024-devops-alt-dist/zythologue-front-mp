import Button from "../components/Button";
import "../components/Button.css";

function HomePage() {
    return (
        <div>
            <h1>Mon premier composant</h1>
            <Button title="Mon bouton" text="Test bouton" />
        </div>
    );
}

export default HomePage;