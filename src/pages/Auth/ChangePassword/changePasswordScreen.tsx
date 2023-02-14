import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./changePassword.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext } from "../../../contexts";
import { toast } from "react-toastify";

function SignupScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
  const userState = useSelector((state: any) => state.userData);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      newPassword: "",
      cnfPassword: "",
      userType: "consumer",
      otp: ""
    },
    validateOnBlur: true,
    validateOnChange: false,
    // validationSchema: validationSchema,
    validate: (values) => {
      let errors: any = {};
      if (!values.otp) {
        errors.otp = "Please enter otp ";
      }
      if (!values.newPassword) {
        errors.newPassword = "Please enter password";
      }
      if (!values.cnfPassword) {
        errors.cnfPassword = "Please again enter password to confirm";
      }
      if (values.newPassword && values.cnfPassword && values.cnfPassword !== values.newPassword) {
        errors.cnfPassword = "Not matching with password";
      }
      return errors;
    },
    onSubmit: (values) => {


      setIsAppLoader(true);
      let reqData = {
        values
      }
      dispatch(AUTH_ACTIONS.registerUser({ formData: values }));
    }
  });

  useEffect(() => {
    // console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.CHANGE_PASSWORD_SUCCESS:
        setIsAppLoader(false);
        navigate("./login", { replace: true });
        toast(userState.message);
        break;
      case AUTH_ACTIONS_TYPES.CHANGE_PASSWORD_FAILURE:
        setIsAppLoader(false);
        toast(userState.message);
        break;
      default:
        break;
    }
  }, [userState.case]);

  useEffect(() => {
    // console.log("location",location.state);
   if(location && location.state && location.state.otp){
    formik.setFieldValue('otp',location.state.otp);
    formik.setFieldValue('phoneNumber',location.state.phoneNumber);
   }
  }, [location])

  useEffect(() => {
   console.log("Values::",formik.values);

  }, [formik.values])



  return (
    <div className="form-area">
      <h2>Set a new Password  </h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-inner">
          <div className="form-input">
            <input
              type="number"
              placeholder="OTP"
              name="otp"
              onChange={formik.handleChange}
              value={formik.values.otp}
            />
            {formik.errors.otp && formik.touched.otp && <p className="error-text">{formik.errors.otp}</p>}
          </div>
          <div className="form-input">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />
            {formik.errors.newPassword && formik.touched.newPassword && <p className="error-text">{formik.errors.newPassword}</p>}
          </div>
          <div className="form-input">
            <input
              type="password"
              name="cnfPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.cnfPassword}
            />
            {formik.errors.cnfPassword && formik.touched.cnfPassword && <p className="error-text">{formik.errors.cnfPassword}</p>}
          </div>
          <button type="submit" className="btn-common">
            Submit
          </button>

          <button type="button" className="btn-underline" onClick={() => navigate("/forgotPassword", { replace: true })}>Back to forgot password</button>
        </div>
      </form>
    </div>
  );
}

export default SignupScreen;