import React from "react";
import { CardItem } from "../card-item/card-item.component";

import "./cards-list.style.scss";

export const CardsList = (props) => {
  // console.log(props);

  return (
    <main>
      <header>
        <h3>
          <small>Shown:</small> {props.monsters.length}
        </h3>
      </header>

      <section className="cards--list">
        {props.monsters.map((monster) => (
          <CardItem
            key={monster.id}
            mansID={monster.id}
            monster={monster}
            num={props.num}
          />
        ))}
      </section>
    </main>
  );
};
