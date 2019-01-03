/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import DesktopContainer from "./DesktopContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DesktopContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
