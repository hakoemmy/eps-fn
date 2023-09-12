import {
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "redux/actions/session";
const user = (state, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true,
          error: null,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [{ ...state.users, data: [payload] }],
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signup: {
          ...state.signup,
          error: payload,
          loading: false,
        },
      };

    default:
      return null;
  }
};

export default user;
