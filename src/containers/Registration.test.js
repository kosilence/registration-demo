import React from "react";
import { shallow, mount, render } from "enzyme";
import { createMockStore, createMockDispatch } from "redux-test-utils";
import Registration from "./Registration";

const mountWithStore = (component, store) => {
  const context = { store };
  return mount(component, { context });
};

const testState = {
  formData: [
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
  ]
};

describe("Container <Registration />", () => {
  it("should render <FormBody /> successfully", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    expect(wrapper.find("FormBody").length).toBe(1);
  });

  it("should pass formData prop to <FormBody />", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    expect(wrapper.find("FormBody").prop("formData")).toEqual(
      testState.formData
    );
  });

  it("should dispatch CHANGE_INPUT_VALUE action to Store", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    wrapper
      .find('input[name="username"]')
      .simulate("change", {
        target: { name: "username", value: "othervalue" }
      });
    expect(
      store.isActionDispatched({
        type: "CHANGE_INPUT_VALUE",
        name: "username",
        value: "othervalue"
      })
    ).toBe(true);
  });

  it("should dispatch BLUR_INPUT action to Store", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    wrapper
      .find('input[name="username"]')
      .simulate("blur", { target: { name: "username", value: "othervalue" } });
    expect(
      store.isActionDispatched({
        type: "BLUR_INPUT",
        name: "username",
        value: "othervalue"
      })
    ).toBe(true);
  });

  it("should dispatch RESET_FORM action to Store", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    wrapper.find("#formReset").simulate("click");
    expect(
      store.isActionDispatched({
        type: "RESET_FORM"
      })
    ).toBe(true);
  });

  it("should dispatch SUBMIT_FORM action to Store", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<Registration />, store);
    wrapper.find("#formSubmit").simulate("click");
    expect(
      store.isActionDispatched({
        type: "SUBMIT_FORM"
      })
    ).toBe(true);
  });
});
