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
    case 'GET_OPTIONS_PENDING':
    return { ...state, isLoading: true }
    case 'GET_OPTIONS_SUCCESS':
      return { ...state, ...payload, isLoading: false }
    case 'GET_OPTIONS_FAILURE':
    return { ...state, error: payload.error, isLoading: false }
    case 'SEND_ORDER_PENDING':
      return { ...state, isLoading: true }
    case 'SEND_ORDER_SUCCESS':
      return { ...state, orderComplete: true, isLoading: false }
    case 'SEND_ORDER_FAILURE':
      return { ...state, error: payload.error, isLoading: false }
    case 'REORDER':
      return { ...state, orderComplete: false }
    default:
      return state;
  }
}