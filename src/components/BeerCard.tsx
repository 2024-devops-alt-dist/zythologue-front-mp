import { useState, useEffect } from "react";

function BeerCard({ cardTitle, description }: { cardTitle: string; description: string }) {
    return (
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
  
  export default BeerCard;
  