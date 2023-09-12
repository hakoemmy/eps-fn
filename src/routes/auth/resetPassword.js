import ResetPassword from "components/auth/ResetPassword";

const resetPassword = {
  name: "resetPassword",
  protected: false,
  path: "/resetPassword/:token",
  component: ResetPassword
}

export default resetPassword;