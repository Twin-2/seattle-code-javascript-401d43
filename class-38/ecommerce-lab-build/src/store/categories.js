let initialState = {
  activeCategory: '',
  categoryList: [
    { name: 'electronics', displayName: 'Electronic Products' },
    { name: 'food', displayName: 'Great Food' },
    { name: 'clothing', displayName: 'Wearables' }
  ]
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CATEGORY':
      return {...state, activeCategory: payload }
    
    default:
      return state
  }
}

export const category = (name) => {
  return {
    type: 'CATEGORY',
    payload: name
  }
}