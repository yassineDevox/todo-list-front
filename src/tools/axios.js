import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://localhost:9000/api" 
});
