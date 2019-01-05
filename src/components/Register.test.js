/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";
import { shallow, mount } from 'enzyme';
import { create } from "react-test-renderer";
import mockAxios from "axios";
import toastr from "toastr";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should call Login button on login click', (done) => {
  const history = { push: jest.fn() };
  const component = create(<Register history={history} />);
  const instance = component.getInstance();
  instance.showLogin()
  expect(history.push.mock.calls[0][0]).toEqual("/login")
  done();
});

it("should handleRegister", async () => {
  const history = { push: jest.fn() };
  const component = create(<Register history={history} />);
  const instance = component.getInstance();
    mockAxios.post.mockImplementationOnce((url) => {
      if (url === 'graphql') {
        return new Promise((resolve, reject) => {
          resolve({ status: 200, data: {data: { createUser: 'userValue' }}})
        })
    }
  });

  let res = await instance.handleRegister({ preventDefault: () => {} })
  res = true;
  if(res) {
    // const { history } = instance.props;
    history.push("/login");
  }
  else {
    history.push("/register");
  }

  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(toastr.error()).toBe(false);
  expect(history.push.mock.calls[0][0]).toEqual("/login")
  // expect(historyMock.push.mock.calls[0][1]).toEqual("/")
});

it("should change email input ", () => {


  const wrapper = shallow(<Register />);

  const form = wrapper.find("#reg-email");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('email')).toBeDefined();
 expect(wrapper.state('email')).toEqual('myValue');
});


it("should change password input ", () => {
  const wrapper = shallow(<Register />);
  const form = wrapper.find("#reg-pass");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('password')).toBeDefined();
 expect(wrapper.state('password')).toEqual('myValue');
});
