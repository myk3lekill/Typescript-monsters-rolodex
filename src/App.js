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
      name: { firstName: 'Myk3le', lastName: 'Zhang'},
      company: 'ZTM'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName} from {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name:{firstName: 'Andrei', lastName: 'Niagoie'}
              };
             },
            () => {
                console.log(this.state)
              })
            }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
