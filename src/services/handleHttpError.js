import { notification } from "antd";
import store from "store";

const logout = () => {
  store.remove("token");
  window.location.replace("/login");
};

const handleHttpError = (error) => {
  const err = JSON.parse(JSON.stringify(error));
  const { data, status } = error.response || {};

  if (status === 401) {
    logout();
  }
  const message = data?.message || err?.message;
  const errorMessage = data?.errors || err?.errors;
  if (message) {
    notification.error({
      message: message,
      description: errorMessage
    });
  }
  return error;
};

export default handleHttpError;
