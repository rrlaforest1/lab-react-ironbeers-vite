import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import url from "./../service/api.js";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  async function fetchOneBeer() {
    try {
      const response = await axios.get(`${url}/${beerId}`);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneBeer();
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="beer-page">
        <section>
          <img src={beer.image_url} alt={beer.name + " Image"} />
        </section>
        <section>
          <div>
            <h2 className="beer-page-name">{beer.name}</h2>
            <p className="beer-page-atenuattion">{beer.attenuation_level}</p>
          </div>
          <div>
            <h3 className="beer-page-tagline">{beer.tagline}</h3>
            <p className="beer-page-date">{beer.first_brewed}</p>
          </div>
        </section>
        <p className="beer-page-desc">{beer.description}</p>
        <p className="beer-page-contributor">{beer.contributed_by}</p>
      </div>
    </>
  );
}

export default BeerDetailsPage;
