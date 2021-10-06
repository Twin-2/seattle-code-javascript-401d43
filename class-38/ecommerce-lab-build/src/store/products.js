let initialState = [
  { name: 'nike shoe', category: 'clothing', price: 99.00, inStock: 5 },
  { name: 'adidas shoe', category: 'clothing', price: 79.00, inStock: 15 },
  { name: 'pizza', category: 'food', price: 5.00, inStock: 10 },
  { name: 'apple', category: 'food', price: 1.00, inStock: 20 },
  { name: 'xbox', category: 'electronics', price: 499.00, inStock: 2 },
]

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ADD_TO_CART':
      return state.map(product => product.name === payload.name ? {...product, inStock: product.inStock - 1 } : product);

    default:
      return state
  }
}
