import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./login.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { SideBarContext } from "../../../contexts";

function LoginScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const userState = useSelector((state: any) => state.userData);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
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
      if (!values.password) {
        errors.password = "Please enter password";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log("values", values);
      dispatch(AUTH_ACTIONS.authenticateUser({ formData: values }));
    }
  });

  useEffect(() => {
    // console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_SUCCESS:
        history("./register");
        storage.storeData(storage.keys.TOKEN_CL, userState.userDetails.accessToken);
        storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        break;
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_NOT_VERIFIED:
        history("/otp", {
          state: {
            otp: userState.userDetails.otp ? userState.userDetails.otp.toString() : null,
            phoneNumber: formik.values.phoneNumber,
            userType: formik.values.userType
          }
        });
        storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        break;
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_FAILURE:
        break;
      default:
        break;
    }
  }, [userState.case]);

  return (
    <div className="form-area">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-inner">
          <input
            type="text"
            placeholder="Mobile number"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button className="btn-common">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
