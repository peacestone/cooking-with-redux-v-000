import React, { Component } from 'react';
import { addRecipe } from '../../actions/recipes'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; /* code change */

export class RecipesInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      calories: null
    }
  }


handleNameChange = event => this.setState({name: event.target.value})
 handleCalorieChange = event => this.setState({calories: event.target.value})


handleSubmit(event) {event.preventDefault(); console.log(this.props)
  this.props.addRecipe({name: this.state.name, calories: this.state.calories, ingredientIds: []})
}


  render(){
    return(
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type='text' name='name' onChange={this.handleNameChange}  placeholder='name' />
        <input type='text' onChange={this.handleCalorieChange} name='calories' placeholder='calories' />
        <input type='submit' value='submit' />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addRecipe: addRecipe
    }, dispatch)
}

const mapStateToProps = (state) => {return {recipes: state.recipes}}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
