import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./register.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext } from "../../../contexts";

function SignupScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
  // const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
  const userState = useSelector((state: any) => state.userData);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      cnfPassword: "",
      userType: "consumer"
    },
    validateOnBlur: true,
    validateOnChange: false,
    // validationSchema: validationSchema,
    validate: (values) => {
      let errors: any = {};
      if (!values.firstName) {
        errors.firstName = "Please enter user first name";
      }
      // if (!values.lastName) {
      //   errors.lastName = "Please enter user last name"
      // }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Please enter 10 digit phone number";
      }
      if (!values.password) {
        errors.password = "Please enter password";
      }
      if (!values.cnfPassword) {
        errors.cnfPassword = "Please again enter password to confirm";
      }
      if (values.password && values.cnfPassword && values.cnfPassword !== values.password) {
        errors.cnfPassword = "Not matching with password";
      }
      return errors;
    },
    onSubmit: (values) => {
      setIsAppLoader(true);
      dispatch(AUTH_ACTIONS.registerUser({ formData: values }));
    }
  });

  useEffect(() => {
    console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.REGISTER_USER_SUCCESS:
        setIsAppLoader(false);
        // history("./register");
        // storage.storeData(storage.keys.TOKEN_CL, userState.userDetails.accessToken);
        // storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        break;
      case AUTH_ACTIONS_TYPES.REGISTER_USER_FAILURE:
        setIsAppLoader(false);
        break;
      default:
        break;
    }
  }, [userState.case]);

  return (
    <div className="form-area">
      <h2>Register </h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-inner">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
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
          <input
            type="password"
            name="cnfPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.cnfPassword}
          />
          <button type="submit" className="btn-common">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupScreen;
