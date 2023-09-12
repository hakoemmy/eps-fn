import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from "../../actions/session";

const profile = (state, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
          error: null,
        },
      };
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          data: payload,
          loading: false,
          error: null,
          isAuthenticated: true,
        },
      };
    }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          error: payload,
          loading: false,
        },
      };

    default:
      return null;
  }
};
export default profile;
