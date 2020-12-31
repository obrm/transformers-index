import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card border border-dark card-main rounded-lg ml-4 mb-5">
      <Link to={`/entry/${props.id}`}>
        <img
          src={props.image}
          className="card-img-top card-image"
          alt={props.title}
        />
      </Link>
      <div className="card-body cardBody">
        <h5 className="card-title">
        <Link to={`/entry/${props.id}`} className="no-deco">
        {props.title}        
          </Link>
        </h5>
        <p className="card-text">{props.date.toLocaleDateString("he-IL")}</p>
        <p className="card-text">
          <strong>Views:</strong> {props.views}
        </p>
        <Link
          to={`/entry/${props.id}`}
          onClick={() => props.updateItem(props.id)}
          className="btn btn-dark mx-auto card-button"
        >
          Go to Entry
        </Link>
      </div>
    </div>
  );
};

export default Card;
