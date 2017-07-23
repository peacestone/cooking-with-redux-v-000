import React, { Component } from 'react';
import { ConnectedIngredients } from './Ingredients'
import {ConnectedAddIngredient} from './AddIngredient'
import { connect } from 'react-redux'; /* code change */


export class AddIngredients extends Component {
  render(){
    const notSelected = this.props.unselectedIngredients.map((ingredient, index) => {return <ConnectedAddIngredient key={index} ingredient={ingredient}  />})
    const selected = this.props.selectedIngredients.map((ingredient, index )=> {return <li key={ingredient.id} >{ingredient.name}</li> })
    return(
      <div>
        {notSelected}
        {selected}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
console.log(state);
  let selectedIngredients = state.ingredients.filter(ingredient => state.recipeForm.ingredientIds.includes(ingredient.id) ?  ingredient : null)

  let unselectedIngredients = state.ingredients.filter(ingredient => state.recipeForm.ingredientIds.includes(ingredient.id) ? null :  ingredient)
  // above the return
  return {
    ingredients: state.ingredients,
    unselectedIngredients: unselectedIngredients,
    selectedIngredients: selectedIngredients
  }
}



export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)
