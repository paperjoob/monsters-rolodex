import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/CardList/CardList';
import {SearchBox} from './components/SearchBox/SearchBox';

class App extends Component {

    state = {
      // array of of objects monsters
      monsters: [],
      searchField: ''
    };

  // react renders the content onto the page
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // converting response into JSON format
      .then(response => response.json())
      // set the state to the response of the monsters array
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {

    // destructure allows us to pull properties off an object and set it to a constant, from the state object
    const { monsters, searchField } = this.state;
    // filter the monsters array, pass onto cardlist component and dynamically update cardlist based on what we are searching
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (   
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters' 
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
