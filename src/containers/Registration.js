import { connect } from "react-redux";
import { actions } from "../actions";
import FormBody from "../components/FormBody";

const mapStateToProps = state => ({
  formData: state.formData
});

const mapDispatchToProps = dispatch => {
  return {
    onChange: (name, value) => {
      dispatch(actions.changeInputValue(name, value));
    },
    onBlur: (name, value) => {
      dispatch(actions.blurInput(name, value));
    },
    onReset: () => {
      dispatch(actions.resetForm());
    },
    onSubmit: () => {
      dispatch(actions.submitForm());
    }
  };
};

const Registration = connect(mapStateToProps, mapDispatchToProps)(FormBody);

export default Registration;
