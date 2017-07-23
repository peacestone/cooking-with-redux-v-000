const recipeForm = (state = {ingredientIds: []}, action) => {
  switch (action.type) {
  case 'ADD_INGREDIENT':
    return Object.assign({}, state, state.ingredientIds.concat(action.id))
  default:
    return state
  }
}

export default recipeForm
