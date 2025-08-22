import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/"
});

instance.interceptors.request.use(
  function (config) {
    console.log("this is request -->", config)
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("this is response -->", config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;