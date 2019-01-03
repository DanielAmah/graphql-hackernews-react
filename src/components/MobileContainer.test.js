/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import MobileContainer from "./MobileContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MobileContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
