import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ input, onChange, onBlur }) => {
  return (
    <label className="form-label" name={input.name}>
      {input.label} :
      <input
        type={input.type}
        name={input.name}
        value={input.value}
        onChange={e => onChange(e.target.name, e.target.value)}
        onBlur={e => onBlur(e.target.name, e.target.value)}
      />
      <p className="label-error">{input.error}</p>
    </label>
  );
};

FormInput.propTypes = {
  input: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default FormInput;
