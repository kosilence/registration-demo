export const types = {
  CHANGE_INPUT_VALUE: "CHANGE_INPUT_VALUE",
  BLUR_INPUT: "BLUR_INPUT",
  RESET_FORM: "RESET_FORM",
  SUBMIT_FORM: "SUBMIT_FORM"
};

export const actions = {
  changeInputValue: (name, value) => ({
    type: types.CHANGE_INPUT_VALUE,
    name: name,
    value: value
  }),
  blurInput: (name, value) => ({
    type: types.BLUR_INPUT,
    name: name,
    value: value
  }),
  resetForm: () => ({ type: types.RESET_FORM }),
  submitForm: () => ({ type: types.SUBMIT_FORM })
};
