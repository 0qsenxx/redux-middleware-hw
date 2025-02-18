import { useState } from "react";
import "./App.css";
import MiddleWareTest from "./components/MiddleWareTest/MiddleWareTest";
import PostsList from "./components/PostsList/PostsList";

function App() {
  const [isClickedBtn, setIsClickedBtn] = useState(false);

  return (
    <>
      <MiddleWareTest setIsClickedBtn={setIsClickedBtn} />
      {isClickedBtn && <PostsList />}
    </>
  );
}

export default App;
