/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import { shallow, mount } from 'enzyme';
import { create } from "react-test-renderer";
import mockAxios from "axios";
import toastr from "toastr";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should change email input ", () => {


  const wrapper = shallow(<Login />);

  const form = wrapper.find("#email");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('email')).toBeDefined();
 expect(wrapper.state('email')).toEqual('myValue');
});

it("should handleLogin", async () => {
  const history = { push: jest.fn() };
  const component = create(<Login history={history} />);
  const instance = component.getInstance();
  const error = 'Incorrect Username or Password'
    mockAxios.post.mockImplementationOnce((url) => {
      if (url === 'graphql') {
        return new Promise((resolve, reject) => {
          resolve({ status: 200, data: {data: { signinUser: 'userValue' }}})
        })
    }
  });

  let res = await instance.handleLogin({ preventDefault: () => {} })
  res = true;
  if(res) {
    // const { history } = instance.props;
    history.push("/");
  }

  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(toastr.error()).toBe(false);
  expect(history.push.mock.calls[0][0]).toEqual("/login")
  // expect(historyMock.push.mock.calls[0][1]).toEqual("/")
});

it("should change password input ", () => {


  const wrapper = shallow(<Login />);

  const form = wrapper.find("#password");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('password')).toBeDefined();
 expect(wrapper.state('password')).toEqual('myValue');
});


it('should call Register button on register click', (done) => {
  const history = { push: jest.fn() };
  const component = create(<Login history={history} />);
  const instance = component.getInstance();
  instance.showRegister()
  expect(history.push.mock.calls[0][0]).toEqual("/register")
  done();
});
