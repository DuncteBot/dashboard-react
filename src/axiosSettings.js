import axios from 'axios';

// axios.defaults.baseURL = 'https://dashboard.dunctebot.com/api';
axios.defaults.baseURL = 'http://localhost:2000/api';
axios.defaults.withCredentials = true;
/*axios.defaults.transformResponse = (data) => {
    console.log(data);

    return data;
};*/
