import React, { Component } from "react";

import CardList from "./components/CardList/CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => console.log(this.setState({ monsters: users })));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
