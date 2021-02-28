import React from "react";

import "./card-item.style.scss";

export const CardItem = (props) => {
  return (
    <div className="card--item">
      <div className="card">
        <picture className="image--content">
          <img
            src={`https://robohash.org/${props.monster.id}?set=set1`}
            alt={`Robot nom-${props.monster.id}`}
          />
          {/* {fetch("https://jsonplaceholder.typicode.com/photos/" + monster.id)
              .then((response) => response.json())
              .then((imgUrl) => iamge.url)} */}
        </picture>
        <h2>
          {props.monster.name} {props.num}
        </h2>
        <p>
          <address>
            <small>City: {props.monster.address.city}</small>{" "}
          </address>
          {props.monster.email}
        </p>
      </div>
    </div>
  );
};
