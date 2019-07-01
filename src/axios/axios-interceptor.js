import axios from 'axios';

axios.defaults.baseURL = "";

axios.interceptors.request.use(
    requestConfig => {
        requestConfig.headers.Authorization = requestConfig.header;
        return requestConfig;
    }, error => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        // TO STORE THE JWT TOKEN F ROM RESPONSE
       let jwtToken = response.headers.Authorization;
        return response;
    }, error => {
        Promise.reject(error);
    }
)