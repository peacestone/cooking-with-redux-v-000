import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

export class AddIngredient extends Component {
  render(){
    return(
      <div>
        Ok
      </div>
    )
  }
}

const mapStatetoProps = (state) => {return {ingredients: state.ingredients}}

connect(mapStatetoProps)(AddIngredient)



export const ConnectedAddIngredient = AddIngredient
