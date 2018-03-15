const initialState = {
  isLoading: false,
  toppings: [],
  sizes: [],
  orderComplete: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case 'SAVE_OPTIONS_PENDING':
      return { ...state, isLoading: true }
    case 'SAVE_OPTIONS_SUCCESS':
      return { ...state, ...payload, isLoading: false }
    case 'SAVE_OPTIONS_FAILURE':
      return { ...state, error: payload.error, isLoading: false }
    default:
      return state;
  }
}