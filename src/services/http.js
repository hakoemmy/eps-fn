import axios from "axios";
import store from "store";
import { baseURL } from "../constants";
import handleHttpError from 'services/handleHttpError';

class Http {
  constructor() {
    const token = store.get("token");
    this.instance = axios.create({
      baseURL,
      headers: {
        authorization: `Bearer ${token}`,
      },
      responseType: "json",
      validateStatus: (status) => status < 400,
    });
    this.instance.interceptors.response.use(this._resolve, handleHttpError);
  }

  _resolve(response) {
    const { data } = response;
    return { ...response, body: data };
  }

  get(endpoint, params = {}, config = {}) {
    return this.instance.get(endpoint, {
      ...config,
      params,
    })
  }

  post(endpoint, data = {}, config={}) {
    return this.instance.post(endpoint, data, config)
  }

  put(endpoint, data = {}, config={}) {
    return this.instance.put(endpoint, data, config)
  }

  patch(endpoint, data = {}, config ={}) {
    return this.instance.patch(endpoint, data, config)
  }

  delete(endpoint, data = {}, config = {}) {
    return this.instance.delete(endpoint, data, config);
  }
}

export default new Http();
