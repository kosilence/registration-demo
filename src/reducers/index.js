import { types } from "../actions";

const initialState = {
  formData: [
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
  ],
  isShowFormData: false
};

function handleInputValueChange(state, action) {
  const value = action.value ? action.value : "";
  const name = action.name ? action.name : "";

  let formData = { ...state }.formData;
  formData = formData.map(input => {
    return input.name === name ? { ...input, value: value } : input;
  });

  return { ...state, formData: formData, isShowFormData: false };
}

function handleInputBlur(state, action) {
  const value = action.value ? action.value : "";
  const name = action.name ? action.name : "";

  let formData = { ...state }.formData;
  formData = formData.map(input => {
    return input.name === name
      ? { ...input, error: formValidater(name, value, formData) }
      : input;
  });

  return { ...state, formData: formData };
}

function handleFormReset(state, action) {
  let initialState = {
    formData: [
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
    ],
    isShowFormData: false
  };
  return initialState;
}

function handleFormSubmit(state, action) {
  let formData = { ...state }.formData;
  let isComplated = true;
  formData = formData.map(input => {
    let errorMsg = formValidater(input.name, input.value, formData);
    if (errorMsg) {
      isComplated = false;
    }
    return { ...input, error: errorMsg };
  });

  return { ...state, formData: formData, isShowFormData: isComplated };
}

// ****************************************
// 工具类函数
// ****************************************

function formValidater(name, value, formData) {
  switch (name) {
    case "username":
      if (value === "") {
        return "User name can not be empty!";
      } else {
        return "";
      }
    case "password":
      const passwordReg = /(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z]).*$/;
      if (!passwordReg.test(value)) {
        return "Password must be at least 8 characters, and contain upper and lower case letters";
      } else {
        return "";
      }
    case "confirmPassword":
      let password;
      for (let i in formData) {
        if (formData[i].name === "password") {
          password = formData[i].value;
        }
      }
      if (value !== password) {
        return "Password must be same as above";
      } else {
        return "";
      }
    case "phoneNumber":
      const phoneReg = /(^((\+86)?1[3-9][0-9])\d{8}$)|(^(\d{3,4}-)?\d{7,8}$)/;
      if (!phoneReg.test(value)) {
        return "Check to ensure the number is valid for a Chinese mobile or fixed line phone number";
      } else {
        return "";
      }
    default:
      return "";
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT_VALUE:
      return handleInputValueChange(state, action);
    case types.BLUR_INPUT:
      return handleInputBlur(state, action);
    case types.RESET_FORM:
      return handleFormReset(state, action);
    case types.SUBMIT_FORM:
      return handleFormSubmit(state, action);
    default:
      return state;
  }
};
