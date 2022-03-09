import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "http://localhost:9000/api" 
});

export default AxiosClient