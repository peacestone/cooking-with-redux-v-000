import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

export class AddIngredient extends Component {
  render(){
    const ingredients = this.props.ingredients.map((ingredient, index) => {return <li key={index}>{ingredient.name}<button type='button'>Add</button> </li>   } )
    return(
      <div>
       <button>'hi'</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => { console.log(state.ingredients[0][0] + " state");
  return {
    ingredients: state.ingredients
  }
}




export const ConnectedAddIngredient = connect(mapStateToProps)(AddIngredient)
