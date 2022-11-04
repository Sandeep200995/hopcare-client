import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./login.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";

function LoginScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
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
      return;
      dispatch(AUTH_ACTIONS.authenticateUser({ formData: values }));
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        };
        // dispatch(COMMON_ACTIONS.startLoading({}));
        let response: any = await fetch("http://localhost:4000/api/user/login", requestOptions);
        response = await response.json();
        console.log("Response ", response);
        // dispatch(COMMON_ACTIONS.stopLoading({}));
        if (response.responseCode === 200) {
          storage.storeData(storage.keys.TOKEN_CL, response.accessToken);
          storage.storeData(storage.keys.USER_TYPE, values.userType);
          history("/");
          // toggleToast({ ...toast, msg: response.message, status: !toast.status, type: "success" });
          // setIsAuthenticated(true);
        } else if (response.responseCode === 202) {
          // toggleToast({ ...toast, msg: response.message, status: !toast.status, type: "success" });
          setTimeout(() => {
            history("/otp", {
              state: {
                otp: response.otp ? response.otp.toString() : null,
                phoneNumber: values.phoneNumber,
                userType: values.userType
              }
            });
          }, 800);
        } else {
          // toggleToast({ ...toast, msg: response.message, status: !toast.status, type: "error" });
        }
      } catch (error) {
        // dispatch(COMMON_ACTIONS.stopLoading({}));
        // toggleToast({ ...toast, msg: "Failed to send request", status: !toast.status, type: "error" });
      }
    }
  });

  useEffect(() => {
    console.log("userState", userState);

    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_SUCCESS:
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
