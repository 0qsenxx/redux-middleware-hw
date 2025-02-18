import { getPosts, searchPost } from "./actions";

const initialState = {
  posts: [],
  search: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getPosts:
      return { ...state, posts: action.payload };
    case "getPostsSuccessful": 
      return { ...state, posts: action.payload };
    case searchPost:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
