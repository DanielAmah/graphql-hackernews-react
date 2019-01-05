/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import MobileContainer from "./MobileContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MobileContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("DesktopContainer handleSidebarHide method", () => {
  it("shows state change with handleSidebarHide function", () => {
    const component = create(<MobileContainer />);
    const instance = component.getInstance();
    instance.handleSidebarHide();
    expect(instance.state.sidebarOpened).toBe(false);
  });
});

describe("DesktopContainer handleToggle method", () => {
  it("shows state change with handleToggle function", () => {
    const component = create(<MobileContainer />);
    const instance = component.getInstance();
    instance.handleToggle();
    expect(instance.state.sidebarOpened).toBe(true);
  });
});
