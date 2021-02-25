import React from "react";

import "./card-item.style.scss";

export const CardItem = (props) => {
  return (
    <div>
      <picture className="image--content">
        {/* {fetch("https://jsonplaceholder.typicode.com/photos/" + monster.id)
              .then((response) => response.json())
              .then((imgUrl) => iamge.url)} */}
        <img src="" alt="" />
      </picture>
      <h2>
        {props.monster.name} {props.num}
      </h2>
    </div>
  );
};
