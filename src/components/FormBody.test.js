import React from "react";
import { shallow, mount, render } from "enzyme";
import FormBody from "./FormBody";
import FormInput from "./FormInput";

const setup = formData => {
  const props = {
    formData: formData,
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onReset: jest.fn(),
    onSubmit: jest.fn()
  };

  const component = shallow(<FormBody {...props} />);

  return {
    props: props,
    component: component
  };
};

describe("<FormBody />", () => {
  let formData;

  beforeEach(() => {
    formData = [
      {
        value: "",
        name: "username",
        type: "text",
        label: "User Name",
        error: ""
      },
      {
        value: "",
        name: "password",
        type: "password",
        label: "Password",
        error: ""
      },
      {
        value: "",
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        error: ""
      },
      {
        value: "",
        name: "phoneNumber",
        type: "text",
        label: "Phone Number",
        error: ""
      }
    ];
  });

  it('should <form> has className "form"', () => {
    const { component } = setup(formData);
    expect(component.find("form").hasClass("form")).toBe(true);
  });

  it("should render 4 <FormInput /> components", () => {
    const { component } = setup(formData);
    expect(component.find("FormInput").length).toBe(4);
  });

  it('should render 2 <input className="form-button" /> components', () => {
    const { component } = setup(formData);
    expect(component.find("input.form-button").length).toBe(2);
  });

  it("should call action on reset button click", () => {
    const { props, component } = setup(formData);
    component.find("#formReset").simulate("click");
    expect(props.onReset).toBeCalled();
  });

  it("should call action on submit button click", () => {
    const { props, component } = setup(formData);
    component.find("#formSubmit").simulate("click");
    expect(props.onSubmit).toBeCalled();
  });
});
