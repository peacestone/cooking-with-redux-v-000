import React, { Component } from 'react';
import { ConnectedIngredients } from './Ingredients'
import {ConnectedAddIngredient} from './AddIngredient'
import { bindActionCreators } from 'redux'; /* code change */
import { connect } from 'react-redux'; /* code change */
import { addIngredient } from '../../actions/ingredients'



export class AddIngredients extends Component {

  constructor(props) {
    super()

  }

  //handleClick = event => {this.props.addIngredient(event.target.dataset.id)}
  render(){
    const notSelected = this.props.unselectedIngredients.map((ingredient, index) => {return(
      <ConnectedAddIngredient key={index} {...ingredient} >
      </ConnectedAddIngredient>
    )})


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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addIngredient: addIngredient}, dispatch)
}

export const ConnectedAddIngredients = connect(mapStateToProps, mapDispatchToProps)(AddIngredients)
