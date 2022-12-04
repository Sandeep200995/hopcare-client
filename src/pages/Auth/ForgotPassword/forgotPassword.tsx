import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./forgotPassword.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext } from "../../../contexts";

function LoginScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
  // const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
  const userState = useSelector((state: any) => state.userData);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      // password: "",
      userType: "consumer"
    },
    validateOnBlur: true,
    validateOnChange: false,
    // validationSchema: validationSchema,
    validate: (values) => {
      let errors: any = {};
      if (!values.phoneNumber) {
        errors.phoneNumber = "Please enter 10 digit phone number";
      }
      // if (!values.password) {
      //   errors.password = "Please enter password";
      // }
      return errors;
    },
    onSubmit: (values) => {
      // setIsAppLoader(true);
      dispatch(AUTH_ACTIONS.forgotPassword({ formData: values }));
    }
  });

  useEffect(() => {
    // console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.FORGOT_PASSWORD_SUCCESS:
        setIsAppLoader(false);
        history("/otp", {
          state: {
            // otp: userState.userDetails.otp ? userState.userDetails.otp.toString() : null,
            // phoneNumber: formik.values.phoneNumber,
            // userType: formik.values.userType
          }
        });
        break;
      case AUTH_ACTIONS_TYPES.FORGOT_PASSWORD_FAILURE:
        setIsAppLoader(false);
        break;
      default:
        break;
    }
  }, [userState.case]);

  return (
    <div className="form-area">
      <h2>Forgot your password</h2>
      <h4>
        Enter your registered mobile number we will send <br className="mb-nobreak" /> you OTP after submit
      </h4>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-inner">
          <div className="form-input">
            <input
              type="text"
              placeholder="Mobile number"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            {formik.errors.phoneNumber && <p className="error-text">{formik.errors.phoneNumber}</p>}
          </div>
          <button type="submit" className="btn-common">
            Submit
          </button>
          <button type="button" className="btn-underline" onClick={() => history("./login")}>
            Back to login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
