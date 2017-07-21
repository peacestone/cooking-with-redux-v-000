import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

export class AddIngredient extends Component {
  render(){
    const ingredients = this.props.ingredients.map((ingredient, index) => {return <li key={index}>{ingredient.name} <button type='button'>Add</button> </li>   } )
    return(
      <div>
      {ingredients}
      </div>
    )
  }
}

const mapStateToProps = (state) => {return {ingredients: state.ingredients}}




export const ConnectedAddIngredient = connect(mapStateToProps)(AddIngredient)
