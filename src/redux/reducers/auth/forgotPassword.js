import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from "../../actions/session";

const forgotPassword = (state, { type, payload }) => {
  switch(type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: true,
          error: null,
          step: 1
        }
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: null,
          step: 2
        }
      }
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: payload,
        }
      }
    default:
      return null;
  }
};

export default forgotPassword;