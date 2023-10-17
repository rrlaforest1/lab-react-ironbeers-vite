import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "./../service/api.js";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);
  const [search, setSearch] = useState("");

  let currentBeers = beers;

  async function fetchBeers() {
    try {
      const response = await axios.get(url);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  if (!beers) {
    return <p>Loading...</p>;
  }

  console.log("beers", beers);

  return (
    <>
      <div className="all-beers">
        <form action="">
          <input
            placeholder="Seach"
            type="text"
            value={search}
            onChange={(e) => {
              const copyBeers = [...beers];

              copyBeers.map((beer) => {
                if (beer.name.indexOf(e.target.value) > -1) {
                  return { ...beer, data_hidden: "true" };
                } else {
                  return { ...beer };
                }
              });
            }}
          />
        </form>
        {beers.map((beer) => {
          return (
            <Link
              key={beer._id}
              to={`/beers/${beer._id}`}
              data-hidden={beer.data_hidden ? beer.data_hidden : "false"}
            >
              <div className="beer">
                <div className="beers-img">
                  <img src={beer.image_url} alt={`${beer.name} Image`} />
                </div>
                <div className="beers-info">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <p>
                    <span>Created by: </span>
                    {beer.contributed_by &&
                    beer.contributed_by.indexOf(" <") > -1
                      ? beer.contributed_by.split(" <")[0]
                      : beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
