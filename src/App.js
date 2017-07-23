import React, { Component } from 'react';
import { Link } from 'react-router'
import {ConnectedIngredientsInput} from './components/ingredients/IngredientsInput'
import { ConnectedAddIngredients } from './components/ingredients/AddIngredients'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/recipes/new">Create Recipe </Link>
      </div>
    );
  }
}

export default App;
