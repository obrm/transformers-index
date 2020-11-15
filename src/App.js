import React, { useState } from "react";

import Navbar from "./components/Navbar";
import CardsGroup from "./components/CardsGroup";
import Footer from "./components/Footer";

import data from "./data/data";

function App() {

  const [cards] = useState(data);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="ml-1 row mt-4">
          <h1>My Entries</h1>
        </div>
        <div className="row mt-1">
          <div className="col-md-3 ml-2">
            <h3>Show Entries</h3>
          </div>
          <div className="col-md-3 mt-2">
            <span>
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Most Popular
              </label>
            </span>
            <span className="ml-5">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                New
              </label>
            </span>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6 ml-1">
            <input
              className="form-control"
              type="text"
              placeholder="Search a Transformer"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 ml-1">
            <input
              className="form-control"
              type="text"
              placeholder="Search By Keyword"
            />
          </div>
          <div className="col-md-4 ml-3 mt-2">
            <span>
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                All keywords
              </label>
            </span>
            <span className="ml-5">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                At least one keyword
              </label>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <CardsGroup cards={cards}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
