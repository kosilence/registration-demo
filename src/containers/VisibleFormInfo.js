import { connect } from "react-redux";
import FormInfo from "../components/FormInfo";

const mapStateToProps = state => ({
  formData: state.formData,
  isShowFormData: state.isShowFormData
});

const VisiableFormInfo = connect(mapStateToProps)(FormInfo);

export default VisiableFormInfo;
