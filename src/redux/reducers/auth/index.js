import login from "./login";
import profile from "./profile";
import signup from "./signup";
import forgotPassword from "./forgotPassword";
import resetPassword from "./resetPassword";

const auth = (state, { type, payload }) => ({
  ...state,
  ...login(state, { type, payload }),
  ...profile(state, { type, payload }),
  ...signup(state, { type, payload }),
  ...forgotPassword(state, { type, payload }),
  ...resetPassword(state, { type, payload })
});

export default auth;
