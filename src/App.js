import React, { Component } from "react";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => console.log(this.setState({ monsters: users })));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
