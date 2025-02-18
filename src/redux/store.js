import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer";
import getPostsAPI from "../services/getPostsAPI";

// const middleWare1 = (store) => {
//     return (next) => {
//       return (action) => {
//         console.log(action);
//         action(store.dispatch);
//       };
//     };
// };

const middleWare1 = (store) => (next) => (action) => {
  // у асинхронному коді екшени приходять у вигляді функцій,
  // а у синхронному екшени є обʼєктами в яких є ключ type і payload

  if (typeof action === "function") {
    // console.log(action);
    return action(store.dispatch);
  }
  return next(action);
};

const getPostsThunk = () => async (dispatch) => {
  //   dispatch({type: 'getPosts'});
  try {
    const { data } = await getPostsAPI();
    dispatch({
      type: "getPostsSuccessful",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getPostsError",
      payload: error,
    });
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleWare1))
);

export { store, getPostsThunk };
