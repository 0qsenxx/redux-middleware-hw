import axios from "axios";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";
// axios.defaults.params = {
//   apiKey: "",
// };

const getPostsAPI = () => {
  // const { data } = await axios.get();
  // return data;
  return axios.get("https://jsonplaceholder.typicode.com/users?_limit=50");
};

export default getPostsAPI;
