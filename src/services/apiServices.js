import axios from "axios";
import { toast } from "react-toastify";
import _default from "../components/assets/helper/default.json";

axios.interceptors.request.use(
  function (config) {
    // setStore({mainLoading: true});
    config.timeout = _default.apiTimeOut;
    if (config.headers.needAuth) {
      let token = "5cf9dfd5-3449-485e-b5ae-70a60e997864";
      delete config.headers.needAuth;
      config.headers["X-Access-Token"] = token;
    }
    if (config.url.toLocaleUpperCase().includes("LOGIN")) {
      config.url = _default.api_base_url + config.url;
    } else {
      if (config.headers.changeUrl) {
        config.url = +_default.api_base_url + config.url;
        delete config.headers.changeUrl;
      } else {
        config.url = _default.api_base_url + config.url;
      }
      // config.url = _default.api_base_url["2323"] + config.url;
    }
    return config;
  },
  function (error) {
    toast.error("_errorDesc.SystemError");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    let result = "";
    //handle excel download reports
    if (
      res.config.responseType === "blob" &&
      res.headers["content-type"] === "application/vnd.ms-excel"
    ) {
      return res.data;
    }
    if (res.config.url.toLocaleUpperCase().includes("LOGIN")) {
      result = res.data;
    } else {
      if (res.status === 500) {
        toast.info("_errorDesc.outOfOrder");
      } else {
        if (res.status !== 200) {
          toast.error(res["fa"]);
        }
      }
      result = res.data;
    }
    return result;
  },
  (error) => {
    console.log(error);
    if (error.message === "Network Error") {
      toast.error("لطفا اتصال اینترنت خود را بررسی کنید!");
    } else {
      const expectedError =
        error.response &&
        error.response.status === 200 &&
        error.response.status === 400;
      if (!expectedError) {
        if (error.response.status === 400) {
          const errorDataBody = JSON.parse(
            error.response.data.error_description
          );
          if (!errorDataBody.isSuccess) {
            errorDataBody.exceptions.map((row) => {
              toast.error(row.exception.persianDescription);
            });
          }
        } else {
          toast.error("_errorDesc.requestError");
        }
      }
      if (error.response.status === 500) {
        toast.error(error.response.data["fa"] || error.response.data["msg"]);
      }
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
