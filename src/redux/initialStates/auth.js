const authState = {
  login: {
    data: [],
    error: "",
    loading: false,
  },
  profile: {
    data: {
      role: {
        name: "user",
      },
       name: "",
    },
    error: "",
    loading: true,
    isAuthenticated: false,
  },
  forgotPassword: {
    error: "",
    loading: false,
    step: 1
  },
  resetPassword: {
    error: "",
    loading: false
  }
};

export default authState;
