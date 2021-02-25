import React from "react";
import { CardItem } from "../card-item/card-item.component";

import "./cards-list.style.scss";

export const CardsList = (props) => {
  console.log(props);

  return (
    <>
      {props.monsters.map((monster) => (
        <CardItem
          className="cards-items"
          key={monster.id}
          monster={monster}
          num={props.num}
        />
      ))}
    </>
  );
};
