/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import {shallow, mount} from 'enzyme';
import { create } from "react-test-renderer";
import mockAxios from "axios";
import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should handlelogout", async () => {
  const historyMock = { push: jest.fn() };
  const component = create(<Home history={historyMock}/>);
  const instance = component.getInstance();
    mockAxios.delete.mockImplementationOnce((url) => {
      if (url === 'logout') {
        return new Promise((resolve, reject) => {
          resolve({ status: 200, data: {}})
        })
    }
  });

  const res = await instance.handleLogout()

  if(res) {
    localStorage.clear();
    history.push('/login')
  }
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  expect(mockAxios.delete).toHaveBeenCalledWith("logout", {}, {})
});
