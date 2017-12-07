import { types } from "../actions";
import reducer from "./index";

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

describe("index reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });

  it("should handle CHANGE_INPUT_VALUE", () => {
    expect(
      reducer(initialState, {
        type: types.CHANGE_INPUT_VALUE
      })
    ).toEqual({ ...initialState });

    expect(
      reducer(initialState, {
        type: types.CHANGE_INPUT_VALUE,
        name: "username",
        value: "somevalue"
      })
    ).toEqual({
      formData: [
        {
          value: "somevalue",
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
    });

    expect(
      reducer(
        {
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
          isShowFormData: true
        },
        {
          type: types.CHANGE_INPUT_VALUE,
          name: "username",
          value: "othervalue"
        }
      )
    ).toEqual({
      formData: [
        {
          value: "othervalue",
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
    });
  });

  it("should handle BLUR_INPUT", () => {
    expect(
      reducer(initialState, {
        type: types.BLUR_INPUT,
        name: "wrongName",
        value: ""
      })
    ).toEqual({ ...initialState });

    expect(
      reducer(initialState, {
        type: types.BLUR_INPUT
      })
    ).toEqual({ ...initialState });

    expect(
      reducer(
        {
          formData: [
            {
              value: "123",
              name: "unknownName",
              type: "text",
              label: "Unknown Name",
              error: ""
            }
          ],
          isShowFormData: false
        },
        {
          type: types.BLUR_INPUT,
          name: "unknownName",
          value: "321"
        }
      )
    ).toEqual({
      formData: [
        {
          value: "123",
          name: "unknownName",
          type: "text",
          label: "Unknown Name",
          error: ""
        }
      ],
      isShowFormData: false
    });

    expect(
      reducer(initialState, {
        type: types.BLUR_INPUT,
        name: "username",
        value: ""
      })
    ).toEqual({
      formData: [
        {
          value: "",
          name: "username",
          type: "text",
          label: "User Name",
          error: "User name can not be empty!"
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
    });

    expect(
      reducer(
        {
          formData: [
            {
              value: "",
              name: "username",
              type: "text",
              label: "User Name",
              error: "User name can not be empty!"
            },
            {
              value: "Password123",
              name: "password",
              type: "password",
              label: "Password",
              error: ""
            },
            {
              value: "Password321",
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
              error:
                "Check to ensure the number is valid for a Chinese mobile or fixed line phone number"
            }
          ],
          isShowFormData: false
        },
        {
          type: types.BLUR_INPUT,
          name: "confirmPassword",
          value: "Password321"
        }
      )
    ).toEqual({
      formData: [
        {
          value: "",
          name: "username",
          type: "text",
          label: "User Name",
          error: "User name can not be empty!"
        },
        {
          value: "Password123",
          name: "password",
          type: "password",
          label: "Password",
          error: ""
        },
        {
          value: "Password321",
          name: "confirmPassword",
          type: "password",
          label: "Confirm Password",
          error: "Password must be same as above"
        },
        {
          value: "",
          name: "phoneNumber",
          type: "text",
          label: "Phone Number",
          error:
            "Check to ensure the number is valid for a Chinese mobile or fixed line phone number"
        }
      ],
      isShowFormData: false
    });
  });

  it("should handle RESET_FORM", () => {
    expect(
      reducer(
        {
          formData: [
            {
              value: "",
              name: "username",
              type: "text",
              label: "User Name",
              error: "User name can not be empty!"
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
              value: "",
              name: "phoneNumber",
              type: "text",
              label: "Phone Number",
              error:
                "Check to ensure the number is valid for a Chinese mobile or fixed line phone number"
            }
          ],
          isShowFormData: false
        },
        {
          type: types.RESET_FORM
        }
      )
    ).toEqual({ ...initialState });

    expect(
      reducer(
        {
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
          isShowFormData: true
        },
        {
          type: types.RESET_FORM
        }
      )
    ).toEqual({ ...initialState });
  });

  it("should handle SUBMIT_FORM", () => {
    expect(
      reducer(
        {
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
              value: "123",
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
        },
        {
          type: types.SUBMIT_FORM
        }
      )
    ).toEqual({
      formData: [
        {
          value: "",
          name: "username",
          type: "text",
          label: "User Name",
          error: "User name can not be empty!"
        },
        {
          value: "",
          name: "password",
          type: "password",
          label: "Password",
          error:
            "Password must be at least 8 characters, and contain upper and lower case letters"
        },
        {
          value: "123",
          name: "confirmPassword",
          type: "password",
          label: "Confirm Password",
          error: "Password must be same as above"
        },
        {
          value: "",
          name: "phoneNumber",
          type: "text",
          label: "Phone Number",
          error:
            "Check to ensure the number is valid for a Chinese mobile or fixed line phone number"
        }
      ],
      isShowFormData: false
    });

    expect(
      reducer(
        {
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
        },
        {
          type: types.SUBMIT_FORM
        }
      )
    ).toEqual({
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
      isShowFormData: true
    });
  });
});
