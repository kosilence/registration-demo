import React from "react";
import { shallow, mount, render } from "enzyme";
import FormInput from "./FormInput";

const setup = input => {
  const props = {
    input: input,
    onChange: jest.fn(),
    onBlur: jest.fn()
  };
  const component = shallow(<FormInput {...props} />);

  return {
    props: props,
    component: component
  };
};

describe("<FormInput />", function() {
  let input;
  beforeEach(() => {
    input = {
      value: "pass",
      name: "password",
      type: "password",
      label: "Password",
      error:
        "Password must be at least 8 characters, and contain upper and lower case letters"
    };
  });

  describe("<label> Tag", function() {
    it('should has className "form-label"', () => {
      const { component } = setup(input);
      expect(component.find("label").hasClass("form-label")).toBe(true);
    });

    it("should has name equal to input.name", () => {
      const { component } = setup(input);
      expect(component.find("label").get(0).props.name).toEqual(input.name);
    });

    describe("<input> Tag", function() {
      it("should has type equal to input.type", () => {
        const { component } = setup(input);
        expect(component.find("input").get(0).props.type).toEqual(input.type);
      });

      it("should has name equal to input.name", () => {
        const { component } = setup(input);
        expect(component.find("input").get(0).props.name).toEqual(input.name);
      });

      it("should has value equal to input.value", () => {
        const { component } = setup(input);
        expect(component.find("input").get(0).props.value).toEqual(input.value);
      });

      it("should call action on input change event", () => {
        const { props, component } = setup(input);
        component
          .find("input")
          .simulate("change", {
            target: { name: input.name, value: "otherpass" }
          });
        expect(props.onChange).toBeCalledWith(input.name, "otherpass");
      });

      it("should call action on input blur event", () => {
        const { props, component } = setup(input);
        component
          .find("input")
          .simulate("blur", {
            target: { name: input.name, value: input.value }
          });
        expect(props.onBlur).toBeCalledWith(input.name, input.value);
      });
    });

    describe("<p> for Error Tag", function() {
      it('should has className "label-error"', () => {
        const { component } = setup(input);
        expect(component.find("p").hasClass("label-error")).toBe(true);
      });

      it("should has text equal to input.error", () => {
        const { component } = setup(input);
        expect(component.find("p").text()).toEqual(input.error);
      });
    });
  });
});
