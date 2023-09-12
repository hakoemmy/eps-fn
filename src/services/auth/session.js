import { asyncTryAndCatch } from "helpers/tryAndCatch";
import api from "services/http";

const login = async (data) => {
  return asyncTryAndCatch(() => api.post("/users/login", data))
};

const signup = async (data) => {
  return asyncTryAndCatch(() => api.post("/users", data))
};

const getProfile = async () => {
 return asyncTryAndCatch(() => api.get("/users/user-profile"))
};

const forgotPassword = async (form) => {
  return asyncTryAndCatch(() => api.post("auth/reset-password", form))
}

const resetPassword = async (form) => {
  return asyncTryAndCatch(() => api.patch('auth/reset-password', form))
}

const tapIntoCompany = (form) => {
  return asyncTryAndCatch(() => api.post('users/tap-into-company-portal', form))
}

const allSessionServices = { 
  login, 
  signup, 
  getProfile, 
  forgotPassword, 
  resetPassword, 
  tapIntoCompany 
};

export default allSessionServices;
