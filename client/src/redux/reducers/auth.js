const initialState = {
  isAuthenticated: false,
  invalid: false,
  isLoading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_PENDING':
      return { ...state, isLoading: true }
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, isAuthenticated: payload.isAuthenticated, invalid: payload.invalid }
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false, error: payload.error }
    default:
      return state;
  }
}