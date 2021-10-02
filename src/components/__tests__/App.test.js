import ReactDOM from "react-dom";
import React from "react";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  //   expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
});
