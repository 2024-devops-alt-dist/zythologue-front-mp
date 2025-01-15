import "../components/Header.css";
import Beer from "../types/Beer.types";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function BeerDetailsPage() {
    const { id } = useParams();

    const [beer, setBeer] = useState<Beer>({
        id: 0,
        name: "",
        description: "",
        abv: 0,
        organic: true
    });

    const fetchBeer = async () => {
        const response = await fetch(`/api/v1/beers/${id}`);
        const data = await response.json();
        setBeer(data.beer);
    };

    useEffect(() => {
        fetchBeer()
    }, [id]);

    return (
        <div>
            <h1>
                Détails de la bière numéro {id}
            </h1>
            <p>Nom : { beer.name }</p>
            <p>Description : { beer.description }</p>
            <p>Taux d'alcool : { beer.abv }%</p>
            <p>{ beer.organic ? "Bio" : "Pas bio" }</p>

            <Link to={`/beers`}>
                <button className="btn">Précédent</button>
            </Link>
        </div>
    );
}
export default BeerDetailsPage;