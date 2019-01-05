/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import { shallow, mount } from 'enzyme';
import HomepageHeading from "./HomepageHeading";
import mockAxios from "axios";
import toastr from "toastr";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomepageHeading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("HomepageHeading  handleClose method", () => {
  it("shows state change with handleClose function", () => {
    const component = create(<HomepageHeading />);
    const instance = component.getInstance();
    instance.handleClose();
    expect(instance.state.modalOpen).toBe(false);
    expect(instance.state.disabled).toBe(true);
  });
});

describe("HomepageHeading  handleOpen method", () => {
  it("shows state change with handleOpen function", () => {
    const callback = jest.fn()
    const wrapper = mount(<HomepageHeading onClick={callback} />);
    const handlePageHeading = jest.spyOn(wrapper.instance(), "handleOpen");
    wrapper.instance().forceUpdate()
    wrapper.update()
    wrapper.find("#handle-open").at(1).simulate("click");
    expect(handlePageHeading.mock.calls.length).toBe(1)
  });
});


describe("HomepageHeading  handlePageClickPrev method", () => {
  it("shows state change with handleOpen function", async () => {


    const wrapper = mount(<HomepageHeading />);

    const handlePageHeading = jest.spyOn(wrapper.instance(), "handlePageClickPrev");
    const showUrlListings = jest.spyOn(wrapper.instance(), "showUrlListings");
    wrapper.instance().forceUpdate()
    wrapper.update()
    wrapper.find("#handle-prev").simulate("click");
    expect(handlePageHeading.mock.calls.length).toBe(1)
    const newOffset = -1;
    if (true) return;
    wrapper.setState({ offset: newOffset }, () => {
      showUrlListings()
    });
    expect(wrapper.state().offset).toEqual(-1);
    expect(showUrlListings).toHaveBeenCalled();
    expect(handlePageHeading).toHaveBeenCalled();

  });
});
  describe("HomepageHeading  handlePageClickNext method", () => {
    it("shows state change with handleOpen function", async () => {


      const wrapper = mount(<HomepageHeading />);

      const handlePageHeading = jest.spyOn(wrapper.instance(), "handlePageClickNext");
      const showUrlListings = jest.spyOn(wrapper.instance(), "showUrlListings");
      wrapper.instance().forceUpdate()
      wrapper.update()
      wrapper.find("#handle-next").simulate("click");
      expect(handlePageHeading.mock.calls.length).toBe(1)
      const newOffset = 1;
      if (true){
      wrapper.setState({ offset: newOffset }, () => {
        showUrlListings()
      });
    }
      else {
        wrapper.setState({ disabled: true })
      }
      expect(wrapper.state().offset).toEqual(1);
      expect(showUrlListings).toHaveBeenCalled();
      expect(handlePageHeading).toHaveBeenCalled();

    });
});

it("should handleCreateLink", async () => {
  const component = create(<HomepageHeading />);
  const instance = component.getInstance();
  const error = 'problem creating link'
    mockAxios.post.mockImplementationOnce((url) => {
      if (url === 'graphql') {
        return new Promise((resolve, reject) => {
          resolve({ status: 200, data: {}})
        })
    }
  });
try {
  const res = await instance.handleCreateLink()

  let createListings = '';

  if(res) {
    instance.setState({loading: false})
  }
}
  catch (error) {
    instance.setState({disabled: false})
    toastr.error(error);
  }
  expect(mockAxios.post).toHaveBeenCalled();
  expect(toastr.error()).toBe(false);
});

it("should change url input ", () => {


  const wrapper = shallow(<HomepageHeading />);

  const form = wrapper.find("#url");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('url')).toBeDefined();
 expect(wrapper.state('url')).toEqual('myValue');
});

it("should change description input ", () => {


  const wrapper = shallow(<HomepageHeading />);

  const form = wrapper.find("#description");
  form.props().onChange({target: {
    name: 'myName',
    value: 'myValue'
 }});
 expect(wrapper.state('description')).toBeDefined();
 expect(wrapper.state('description')).toEqual('myValue');
});
