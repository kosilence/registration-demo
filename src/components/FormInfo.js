import React from "react";
import PropTypes from "prop-types";

const FormInfo = ({ formData, isShowFormData }) => {
  const infoList = formData.map(input => (
    <li key={input.name}>
      {input.name} : {input.value}
    </li>
  ));

  return <ul>{isShowFormData ? infoList : ""}</ul>;
};

FormInfo.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object),
  isShowFormData: PropTypes.bool
};

export default FormInfo;
