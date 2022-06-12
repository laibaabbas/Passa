import instance from "./axiosInstance";
const SetAuthToken = (token) => {
  if (token) {
  instance.interceptors.request.use(
    function(config) {
        //const userData = localStorage.getItem("userData"); 
        //const data = JSON.parse( userData)
        config.headers["Authorization"] = 'Bearer ' +  token;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  }
    // if (token) {
    //   console.log(token);
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //   } else {
    //     delete axios.defaults.headers.common["Authorization"];
    //   }
}

export default SetAuthToken