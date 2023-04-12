import axios from "axios";

const baseURL="https://fakestoreapi.com"

export const auth = {
    login: (params) => {
        return axios.post(`${baseURL}/auth/login`, params)
    }
}