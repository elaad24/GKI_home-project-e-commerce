import axios from "axios";

axios.interceptors.response.use(null, (err) => {
  if (err.response && err.response.status >= 403) {
  }
  return Promise.reject(err);
});

const service = {
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  post: axios.post,
  delete: axios.delete,
};

export default service;
