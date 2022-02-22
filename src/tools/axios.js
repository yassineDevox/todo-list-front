import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:1337/api',
});

export default client