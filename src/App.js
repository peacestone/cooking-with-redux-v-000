import React, { Component } from 'react';
import { Link } from 'react-router'
import {ConnectedIngredientsInput} from './components/ingredients/IngredientsInput'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedIngredientsInput />
        <Link to="/recipes/new">Create Recipe </Link>
      </div>
    );
  }
}

export default App;
