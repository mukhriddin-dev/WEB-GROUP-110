import axios from "axios";
let baseUrl ="https://jsonplaceholder.typicode.com"

const post = {
    getAllPost: () => {
        return axios.get(`${baseUrl}/posts`)
    }
}

export default post;