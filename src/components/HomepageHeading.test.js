/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import HomepageHeading from "./HomepageHeading";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomepageHeading />, div);
  ReactDOM.unmountComponentAtNode(div);
});
