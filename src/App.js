import React, { Component } from "react";
import { CardsList } from "./components/cards-list/cards-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      string: "xcv xcv",
      num: 1,
      iamge: "https://jsonplaceholder.typicode.com/photos/",
      tt: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChangeFunction = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state.searchField)
    );
  };

  render() {
    /* const monsters = this.state.monsters;
    const searchField = this.state.searchField; */
    const { monsters, searchField } = this.state;

    const filterMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="container">
        <h2>
          {this.state.string} {this.state.num}
        </h2>

        <header>
          <button
            className="square"
            onClick={() => this.setState({ string: "big", num: 1.1 })}
          >
            change <strong>string</strong>
          </button>{" "}
          &nbsp;
          <button
            className="square"
            onClick={() => this.setState({ num: this.state.num + 1 })}
          >
            change <strong>Num: {this.state.num}</strong>
          </button>
          &nbsp;&nbsp;
          <SearchBox
            placeholder="Search monsters"
            handleChange={this.handleChangeFunction}
          />
        </header>

        {/* <CardsList monsters={this.state.monsters} num={this.state.num} /> */}
        <CardsList monsters={filterMonsters} num={this.state.num} />
      </div>
    );
  }
}

export default App;
