import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

const App = () => {
  return (
    <div>
      <h1>App.js</h1>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
