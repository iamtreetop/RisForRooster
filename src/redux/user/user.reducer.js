const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case "GOOGLE_SIGN_IN_FAILURE":
    case "EMAIL_SIGN_IN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
      default:
        return state;
  }
};

export default userReducer;