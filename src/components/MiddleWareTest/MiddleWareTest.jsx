import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from "../../redux/store";
import { useEffect } from "react";

const MiddleWareTest = ({ setIsClickedBtn }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const onGetData = (evt) => {
    dispatch(getPostsThunk());
    setIsClickedBtn(true);
  };

  return (
    <div>
      <h2>Middle ware</h2>
      <button type="button" onClick={onGetData}>
        click btn
      </button>
    </div>
  );
};

export default MiddleWareTest;
