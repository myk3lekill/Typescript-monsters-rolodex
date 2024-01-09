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
      monsters: [
        {
          id:1,
          name: 'Linda'
        },
        {
          id:2,
          name: 'Frank'
        },
        {
          id:3,
          name:'Jacy'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
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
