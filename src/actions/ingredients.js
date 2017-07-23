let createIngredient = (payload) => {
  return {
    type: 'CREATE_INGREDIENT',
    payload: payload
  }
}

export default createIngredient

let addIngredient = (id) => {
  return {
    type: 'ADD_INGREDIENT',
    id: id
  }
}

export { addIngredient }
