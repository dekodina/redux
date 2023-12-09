const DEFAULT_STATE = {
  data: null,
  loading: true,
  error: null,
};

export function userReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "USER/LOADING/SET":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "USER/SET":
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
