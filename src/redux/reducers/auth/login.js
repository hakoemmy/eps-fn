import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../../actions/session";

const login = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: null,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          data: payload,
          loading: false,
          error: null,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          error: payload,
          loading: false,
        },
      };

    default:
      return null;
  }
};
export default login;
