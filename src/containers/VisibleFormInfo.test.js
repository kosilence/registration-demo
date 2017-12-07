import React from "react";
import { shallow, mount, render } from "enzyme";
import { createMockStore, createMockDispatch } from "redux-test-utils";
import VisibleFormInfo from "./VisibleFormInfo";

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
  ],
  isShowFormData: false
};

describe("Container <VisibleFormInfo />", () => {
  it("should render <FormInfo /> successfully", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<VisibleFormInfo />, store);
    expect(wrapper.find("FormInfo").length).toBe(1);
  });

  it("should pass formData prop to <FormInfo />", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<VisibleFormInfo />, store);
    expect(wrapper.find("FormInfo").prop("formData")).toEqual(
      testState.formData
    );
  });

  it("should pass isShowFormData prop to <FormInfo />", () => {
    const store = createMockStore(testState);
    const wrapper = mountWithStore(<VisibleFormInfo />, store);
    expect(wrapper.find("FormInfo").prop("isShowFormData")).toEqual(
      testState.isShowFormData
    );
  });
});
