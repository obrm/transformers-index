import React, { useState } from "react";

import data from "../data/data";
import CardsGroup from "./CardsGroup";

const MainPage = () => {
  const [cards, setCards] = useState(data);
  let search = "";

  function updateItem(id) {
    let items = [...cards];
    const card = items.find(item => item.id === Number(id));
    card.views++;
    card.date = new Date();
    setCards(items);
};


  const onSearch = ({ target: { value: text } }) => {
    if (!text) {
      setCards(data);
      return;
    }
    const lower = text.toLowerCase();
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(lower)
    );
    setCards(filtered);
  };
  
  
  const onSearchKeyWord = ({ target: { value: text } }) => {
    if (!text) {
      setCards(data);
      return;
    }
    const lower = text.toLowerCase();
    const filtered = cards.filter((card) => 
      card.tags.join().toLowerCase().includes(lower)    
    );    
    setCards(filtered);
  };

  const sortBy = (by) => {
    const gallery = [...cards];
    switch (by) {
      case "popular":
        gallery.sort((card1, card2) => card2.views - card1.views);
        break;
      case "newest":
        gallery.sort((card1, card2) => card2.date - card1.date);
        break;
      default:
        break;
    }
    setCards(gallery);
  };

  return (
    <div className="container">
      <div className="ml-1 row mt-4">
        <h1>My Entries</h1>
      </div>
      <div className="row mt-1">
        <div className="col-md-3 ml-2">
          <h3>Show Entries</h3>
        </div>
        <div className="col-md-3 mt-2">
          <span onClick={() => sortBy("popular")}>
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"              
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Most Popular
            </label>
          </span>
          <span onClick={() => sortBy("newest")} className="ml-5">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"             
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
            defaultValue={search}
            onKeyUp={onSearch}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 ml-1">
          <input
            className="form-control"
            type="text"
            placeholder="Search By Keyword"
            defaultValue={search}
            onKeyUp={onSearchKeyWord}
          />
        </div>        
      </div>
      <div className="row mt-5">
        <CardsGroup cards={cards} updateItem={updateItem}/>
      </div>
    </div>
  );
};

export default MainPage;
