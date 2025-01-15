import "../components/Header.css";
import Beer from "../types/Beer.types";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
            <p>{ beer.name }</p>
            <p>{ beer.description }</p>
            <p>{ beer.abv }</p>
            <p>{ beer.organic ? "Bio" : "Pas bio" }</p>
        </div>
    );
}
export default BeerDetailsPage;