import React from "react";
import { useParams, useHistory } from "react-router-dom";

import data, { getEntry } from "../data/data";
import { logos } from "../data/data";

const Entry = () => {
  const { id } = useParams();
  const history = useHistory();

  const entry = getEntry(id);

  const goToHomepage = () => {
    history.push("/");
  };

  const logo = (affiliation) =>
    affiliation === "Autobot" ? logos.autobots : logos.decepticons;

  return (
    <div className="container entry-container">
      <div className="row m-4">
        <h1 className="entry-h1">{entry.title}</h1>
        <hr />
      </div>
      <div className="row">
        <img className="main-image" src={entry.image} alt={entry.title} />
      </div>
      <div className="row ml-5">
        <h2 className="entry-h2">
          <b>Affiliation:</b> {entry.affiliation}
        </h2>
        <img
          className="logo-img mt-5 ml-n4"
          src={logo(entry.affiliation)}
          alt={`${entry.affiliation}s logo`}
        />
      </div>
      <hr />
      <div className="row ml-5">
        <h2 className="entry-h2" style={{ paddingTop: 0 }}>
          <b>{entry.altModes.length > 1 ? `Alt Modes:` : `Alt Mode:`}</b>
        </h2>
      </div>
      {entry.altModes.map((mode, index) => (
        <div key={index} className="row ml-5 mt-3">
          <h3 className="entry-h3">
            {entry.altModes.length > 1 && index + 1 + "."} {mode.type}:
          </h3>
          <br />          
            <img className="main-image" src={mode.image} alt={mode.type} />       
          <hr />
        </div>
      ))}

      <div className="row ml-5 mt-3 bg-muted description-paragraph">
        <h3 className="entry-h3-2">Description</h3>
        <p className="paragraph">{entry.description}</p>
      </div>
      <div className="row">
        <button
          type="submit"
          onClick={goToHomepage}
          className="btn mx-auto save-entry-button"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Entry;
