import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// Functional Component (Hook)
// function App() {
  
// }

// Class Component 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })}

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox className='search-box' placeholder='search mosters' onChangeHandler={onSearchChange}/>
        {/* {filteredMonsters.map((monster) => {
          return  <div key={monster.id}>
                  <h1>{monster.name}</h1>
                  <
                  /div>
        })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
