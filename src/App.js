import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ""
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log("somekind of error happened " + err))
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }



  render() {

    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Fluffy Cats</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Search for your cats'
        ></SearchBox>
        <CardList monsters={filteredMonsters} > </CardList>
      </div>
    )
  }
}

export default App;
