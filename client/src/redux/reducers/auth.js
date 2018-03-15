const initialState = {
  isAuthenticated: true,
  isLoading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_PENDING':
      return { ...state, isLoading: true }
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, isAuthenticated: true }
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false, error: payload.error }
    default:
      return state;
  }
}