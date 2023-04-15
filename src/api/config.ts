import axios from "axios";
const api = axios.create({
    baseURL: "http://18.183.94.148:3000/v2/defutures/"
})

export default api;