import axios from "axios";
let baseUrl = "http://localhost:8000";

const post = {
  getAllPost: () => {
    return axios.get(`${baseUrl}/posts`);
  },

  getPostItem: (id) => {
    return axios.get(`${baseUrl}/posts/${id}`);
  },

  postItem: (data) => {
    axios.post(`${baseUrl}/posts`, data );
  },
  deletePost: (id) => {
    axios.delete(`${baseUrl}/posts/${id}`)
  },
  updatePost: (id, data) => {
    axios.put(`${baseUrl}/posts/${id}`, data);
  }
  
};

export default post;
