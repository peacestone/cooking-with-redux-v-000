import React, { Component } from 'react';
import { ConnectedIngredients } from './Ingredients'
import {ConnectedAddIngredient} from './AddIngredient'
import { connect } from 'react-redux'; /* code change */


export class AddIngredients extends Component {
  render(){
    return(
      <div>
        <ConnectedIngredients />
      </div>
    )
  }
}

const mapStateToProps = (state) => {return {ingredients: state.ingredients}}



export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)
