import React from 'react';

const Card = (props) => {
    return (
        <div className="card border border-dark card-main rounded-lg ml-4 mb-5">
        <img src={props.image} className="card-img-top card-image" alt={props.title} />
        <div className="card-body cardBody">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.date}
          </p>
          <p className="card-text">
            <strong>Views:</strong> {props.views}
          </p>
          <a href=".././entry.html" className="btn btn-dark mx-auto card-button">
            Edit
          </a>
        </div>
      </div>
    )
};

export default Card;
