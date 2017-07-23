import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import { bindActionCreators } from 'redux'; /* code change */
import { addIngredient } from '../../actions/ingredients'


export class AddIngredient extends Component {

  constructor(props) {
    super(props)

  }
  handleClick = event => {this.props.addIngredient(this.props.id)}
  //handleClick = (event) => this.setState({ingredientIds: this.state.ingredientIds.concat([])})
  render(){

    return(
      <div>
       <button onClick={this.handleClick}>{this.props.id}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    ingredientIds: state.ingredientIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addIngredient: addIngredient}, dispatch)
  }




export const ConnectedAddIngredient = connect(mapStateToProps, mapDispatchToProps)(AddIngredient)
