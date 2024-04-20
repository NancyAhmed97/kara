import gAxios from "axios";

const axios = gAxios.create({
  // baseURL: "https://kaarra.pythonanywhere.com/api/guest",
 baseURL: "https://marriage-application.onrender.com",

  
});

axios.interceptors.request.use(config => {
  return config;
});

export default axios;