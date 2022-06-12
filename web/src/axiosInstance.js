import axios from "axios"
const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
});

// instance.interceptors.request.use(
//     function(config) {
//         const userData = localStorage.getItem("userData"); 
//         const data = JSON.parse( userData)
//         config.headers["Authorization"] = 'Bearer ' +  data.usertoken;
//       return config;
//     },
//     function(error) {
//       return Promise.reject(error);
//     }
//   );

export default instance;