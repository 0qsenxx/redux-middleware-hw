const getPosts = "getPosts";
const searchPost = "searchPost";

const searchPostAction = (value) => ({
  type: "searchPost",
  payload: value,
});

export { getPosts, searchPost, searchPostAction };
