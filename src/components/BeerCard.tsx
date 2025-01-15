import { useState } from "react";

interface Beer {
    id: number;
    name: string;
    description: string;
    abv: number;
    organic: boolean;
}

function BeerCard() {
    const [beers, setBeers] = useState<Beer[]>([]);

    const fetchBeers = async () => {
        try {
            const response = await fetch("/api/v1/beers/getAll");
            if (!response.ok) {
                throw new Error(`Erreur appel api : ${response.status}`);
            }

            const result = await response.json();
            // console.log("Fetched beers data:", result);

            setBeers(result.beers || []);
        } catch (error) {
            console.error("Error fetching beers:", error);
            setBeers([]);
        }
    };

    return (
        <div>
            <button onClick={fetchBeers}>Charger la liste des bières</button>
            <div>
                <ul>
                    {beers.map((beer) => (
                        <li key={beer.id}>
                            <strong>{beer.name}</strong>: {beer.description} (ABV: {beer.abv}%, {beer.organic ? "Organic" : "Non-organic"})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BeerCard;
