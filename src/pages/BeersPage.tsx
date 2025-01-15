import "../components/Header.css";
import '../App.css'
import Beer from "../types/Beer.types";

import { useState } from "react";
import { Link } from "react-router";

function BeersPage() {
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
                console.error("Erreur lors de la récupération des bières:", error);
                setBeers([]);
            }
        };
    
        return (
            <div>
                <button className="beer-btn" onClick={fetchBeers}>Charger la liste des bières</button>
                <div>
                    <ul>
                        {beers.map((beer) => (
                            <li key={beer.id}>
                                <strong>Bière {beer.name} - </strong>
                                <Link to={`/beer/${beer.id}`}>
                                    <button className="btn">Plus d'infos</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    
    export default BeersPage;