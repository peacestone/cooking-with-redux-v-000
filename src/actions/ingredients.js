let createIngredient = (payload) => {
  return {
    type: 'CREATE_INGREDIENT',
    payload: payload
  }
}

export default createIngredient
