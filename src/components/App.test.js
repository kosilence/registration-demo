import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

const setup = (formData, isShowFormData) => {
  const props = {
    formData: formData,
    isShowFormData: isShowFormData
  };
  const component = shallow(<App {...props} />);

  return {
    props: props,
    component: component
  };
};

describe("App Component Wrapper", function() {
  let formData, isShowFormData;
  beforeEach(() => {
    formData = [
      {
        value: "somevalue",
        name: "username",
        type: "text",
        label: "User Name",
        error: ""
      },
      {
        value: "Password123",
        name: "password",
        type: "password",
        label: "Password",
        error: ""
      },
      {
        value: "Password123",
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        error: ""
      },
      {
        value: "1234567",
        name: "phoneNumber",
        type: "text",
        label: "Phone Number",
        error: ""
      }
    ];
    isShowFormData = false;
  });

  it("should render 2 Child <Connect /> successfully", function() {
    const { component } = setup(formData, isShowFormData);
    expect(component.find("Connect").length).toBe(2);
  });
});
