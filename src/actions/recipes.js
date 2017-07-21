let addRecipe = (payload) => {
  return {
    type: 'ADD_RECIPE',
    payload: payload
  }
}

export {addRecipe}
