import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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

  render() {
    return (
      <>
        <h2>
          {this.state.string} {this.state.num}
        </h2>

        {this.state.monsters.map((monster) => (
          <div className="cards-items" key={monster.id}>
            <picture className="image--content">
              <img src="" alt="" />
            </picture>
            <h2>
              {monster.name} {this.state.num}
            </h2>
          </div>
        ))}
        <button
          className="square"
          onClick={() => this.setState({ string: "big", num: 1.1 })}
        >
          change <strong>string</strong>
        </button>
        <button
          className="square"
          onClick={() => this.setState({ num: this.state.num + 1 })}
        >
          change <strong>Num: {this.state.num}</strong>
        </button>
      </>
    );
  }
}

export default App;
