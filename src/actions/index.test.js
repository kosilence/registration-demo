import { types, actions } from "./index";

describe("actions", () => {
  it("changeInputValue should create an action to change input value", () => {
    const name = "input name";
    const value = "input value";
    expect(actions.changeInputValue(name, value)).toEqual({
      type: types.CHANGE_INPUT_VALUE,
      name: name,
      value: value
    });
  });

  it("blurInput should create an action to check input value", () => {
    const name = "input name";
    const value = "input value";
    expect(actions.blurInput(name, value)).toEqual({
      type: types.BLUR_INPUT,
      name: name,
      value: value
    });
  });

  it("resetForm should create an action to reset form", () => {
    expect(actions.resetForm()).toEqual({
      type: types.RESET_FORM
    });
  });

  it("submitForm should create an action to submit form", () => {
    expect(actions.submitForm()).toEqual({
      type: types.SUBMIT_FORM
    });
  });
});
