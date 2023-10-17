import React from "react";
import { useState, useEffect } from "react";
import url from "./../service/api.js";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  // const navigate = useNavigate();

  const handleChange = (event) => {
    const key = event.target.id;
    let value;
    if (event.target.type === "number") {
      value = event.target.valueAsNumber;
    } else {
      value = event.target.value;
    }
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myBeer = formData;

    try {
      const response = await axios.post(`${url}/new`, myBeer);
      console.log("response POST:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="addBeer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            id="tagline"
            type="text"
            value={formData.tagline}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <label htmlFor="first_brewed">First Brewed</label>
          <input
            id="first_brewed"
            type="text"
            value={formData.first_brewed}
            onChange={handleChange}
          />

          <label htmlFor="brewers_tips">Brewer0s Tips</label>
          <input
            id="brewers_tips"
            type="text"
            value={formData.brewers_tips}
            onChange={handleChange}
          />

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            id="attenuation_level"
            type="number"
            value={formData.attenuation_level}
            onChange={handleChange}
          />

          <label htmlFor="contributed_by">Contributed By</label>
          <input
            id="contributed_by"
            type="text"
            value={formData.contributed_by}
            onChange={handleChange}
          />

          <button>Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;

// input:
// Label: Name
// Attributes: name="name" and type="text"
// input:
// Label: Tagline
// Attributes: name="tagline" and type="text"
// textarea:
// Label: Description
// Attributes: name="description" and type="text"
// input:
// Label: First Brewed
// Attributes: name="first_brewed" and type="text"
// input:
// Label: Brewer's Tips
// Attributes: name="brewers_tips" and type="text"
// input:
// Label: Attenuation Level
// Attributes: name="attenuation_level" and type="number"
// input:
// Label: Contributed By
// Attributes: name="contributed_by" and type="text"
// button:
// Text: "Add Beer"
// Attributes: type="submit"
