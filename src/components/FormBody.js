import React from "react";
import FormInput from "./FormInput";
import PropTypes from "prop-types";

const FormBody = ({ formData, onChange, onBlur, onReset, onSubmit }) => {
  const inputList = formData.map(input => (
    <FormInput
      key={input.name}
      input={input}
      onChange={onChange}
      onBlur={onBlur}
    />
  ));

  return (
    <div>
      <form className="form">
        {inputList}
        <input
          type="button"
          id="formReset"
          className="form-button"
          value="Reset"
          onClick={onReset}
        />
        <input
          type="button"
          id="formSubmit"
          className="form-button"
          value="Submit"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
};

FormBody.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func
};

export default FormBody;
