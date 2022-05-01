import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_COVALENT_API_HOST,
    headers: {
      'Content-Type': 'application/json',
    },
});

export default client;
