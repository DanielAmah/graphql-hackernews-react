/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import DesktopContainer from "./DesktopContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DesktopContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("DesktopContainer component", () => {
  test("it matches the snapshot", () => {
    const component = create(<DesktopContainer />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("DesktopContainer hideFixedMenu method", () => {
  it("shows state change with hideFixedMenu function", () => {
    const component = create(<DesktopContainer />);
    const instance = component.getInstance();
    instance.hideFixedMenu();
    expect(instance.state.fixed).toBe(false);
  });
});

describe("DesktopContainer showFixedMenu method", () => {
  it("shows state change with showFixedMenu function", () => {
    const component = create(<DesktopContainer />);
    const instance = component.getInstance();
    instance.showFixedMenu();
    expect(instance.state.fixed).toBe(true);
  });
});
