import React from "react";
import Registration from "../containers/Registration";
import VisiableFormInfo from "../containers/VisibleFormInfo";
import PropTypes from "prop-types";

const App = ({ formData, isShowFormData }) => {
  return (
    <div>
      <Registration />
      <VisiableFormInfo />
    </div>
  );
};

App.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.object),
  isShowFormData: PropTypes.bool
};

export default App;
