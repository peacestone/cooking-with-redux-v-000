import React, { Component } from 'react';
import createIngredient from '../../actions/ingredients'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class IngredientsInput extends Component {

  constructor(props) {
    super()
    this.state = {
      name: '',
      calories: ''
    }
  }

  handleNameChange = event => this.setState({name: event.target.value})

  handleCalorieChange = event => this.setState({calories: event.target.value})

  handleSubmit = event => {event.preventDefault(); this.props.createIngredient(this.state)}

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit} >
        <input type='text' onChange={this.handleNameChange} placeholder='name' />
        <input type='text' onChange={this.handleCalorieChange} placeholder='calories' />
        <input type='submit' value='submit' />
      </form>
      </div>
    )
  }
}


let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch)
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
