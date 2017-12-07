import React from "react";
import { shallow, mount, render } from "enzyme";
import FormInfo from "./FormInfo";

const setup = (formData, isShowFormData) => {
  const props = {
    formData: formData,
    isShowFormData: isShowFormData
  };
  const component = shallow(<FormInfo {...props} />);

  return {
    props: props,
    component: component
  };
};

describe("<FormInfo />", function() {
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
  });

  it("should has 0 children when isShowFormData equal false", () => {
    const { component } = setup(formData, false);
    expect(component.find("ul").children().length).toBe(0);
  });

  it('should render as many <li> tags as formData item"s length', () => {
    const { component } = setup(formData, true);
    expect(component.find("li").length).toBe(formData.length);
  });

  it("should <li> tags have right text equal to props data", () => {
    const { component } = setup(formData, true);
    component.find("li").map((node, index) => {
      let innerText = formData[index].name + " : " + formData[index].value;
      expect(node.text()).toEqual(innerText);
    });
  });
});
