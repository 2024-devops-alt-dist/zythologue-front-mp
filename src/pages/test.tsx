import "../components/Header.css";
import Beer from "../types/Beer.types";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

function BeerDetailsPage() {
    const { id } = useParams();

    const [beer, setBeer] = useState<Beer>({
        id: 0,
        name: "",
        description: "",
        abv: 0,
        organic: true,
    });

    const fetchBeer = useCallback(async () => {
        try {
            const response = await fetch(`/api/v1/beers/${id}`);
            if (!response.ok) {
                throw new Error(`Erreur appel API : ${response.status}`);
            }
            const data: Beer = await response.json();
            setBeer(data);
        } catch (error) {
            console.error("Erreur lors de la récupération de la bière:", error);
        }
    }, [id]);

    useEffect(() => {
        fetchBeer();
    }, [fetchBeer]);

    return (
        <div>
            <h1>Détails de la bière {id}</h1>
            <p>Nom: {beer.name}</p>
            <p>Description: {beer.description}</p>
            <p>ABV: {beer.abv}%</p>
            <p>{beer.organic ? "Bio" : "Pas bio"}</p>
        </div>
    );
}

export default BeerDetailsPage;
