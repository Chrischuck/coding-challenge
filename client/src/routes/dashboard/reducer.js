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
    case 'CRUD_DASH_PENDING':
      return { ...state, isLoading: true }
    case 'CRUD_DASH_SUCCESS':
      return { ...state, ...payload, isLoading: false }
    case 'CRUD_DASH_FAILURE':
      return { ...state, error: payload.error, isLoading: false }
    default:
      return state;
  }
}