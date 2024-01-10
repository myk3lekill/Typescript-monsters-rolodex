import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Functional Component (Hook)
// function App() {
  
// }

// Class Component 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json(response))
    .then((users) => this.setState(
      () => {
        return {monsters: users};
      },
      () => {
        console.log(this.state)
      }
      ))
  }

  render() {
    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
        console.log(event.target.value);
        const filteredMonsters = this.state.monsters.filter((monster) => {
          const searchString = event.target.value.toLocaleLowerCase();
          return monster.name.toLocaleLowerCase().includes(searchString);
        })
        this.setState(() => {
          return { monsters: filteredMonsters}
        })
      }}/>
        {this.state.monsters.map((monster) => {
          return  <div key={monster.id}>
                  <h1>{monster.name}</h1>
                  </div>
        })}
      </div>
    );
  }
}

export default App;
