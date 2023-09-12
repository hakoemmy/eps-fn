import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from '../../actions/session';

const resetPassword = (state, { type, payload }) => {
  switch(type) {
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: true,
          error: null
        }
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: null
        }
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: payload,
        }
      }
    default:
      return null;
  }
}

export default resetPassword;