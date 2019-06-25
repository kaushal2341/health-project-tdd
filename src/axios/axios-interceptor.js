import axios from 'axios';

axios.defaults.baseURL = "";

axios.interceptors.request.use(
    requestConfig => {
        requestConfig.headers.Authorization = token;
        // requestConfig.headers.Origin = "url Of Other Domain";
        return requestConfig;
    }, error => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        // TO STORE THE JWT TOKEN FROM RESPONSE
        // let jwtToken = response.headers.Authorization;
        return response;
    }, error => {
        Promise.reject(error);
    }
)