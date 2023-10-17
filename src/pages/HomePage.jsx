import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import url from "./../service/api.js";
import { Link } from "react-router-dom";
import beersImage from "./../assets/beers.png";
import newBeersImage from "./../assets/new-beer.png";
import randomBeerImage from "./../assets/random-beer.png";

function HomePage() {
  return (
    <>
      <div className="home">
        <Link to={"/beers"}>
          <img src={beersImage} alt="All Beers Image" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            impedit, fugiat, recusandae.
          </p>
        </Link>
        <Link to={"/random-beer"}>
          <img src={newBeersImage} alt="Random Beer Image" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quibusdam.
          </p>
        </Link>
        <Link to={"/new-beer"}>
          <img src={randomBeerImage} alt="New Beer Image" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            id, consequuntur, molestias, magnam fugiat repellat architecto.
          </p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
