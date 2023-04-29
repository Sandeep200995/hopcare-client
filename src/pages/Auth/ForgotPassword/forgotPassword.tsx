import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./forgotPassword.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext } from "../../../contexts";
import { toast } from "react-toastify";

function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
  const userState = useSelector((state: any) => state.userData);
  const [userTypes]: any = useState([
    { "name": "Select", "value": "" },
    { "name": "User", "value": "consumer" },
    { "name": "Hospital", "value": "clinic" },
  ]);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      userType: "consumer"
    },
    validateOnBlur: true,
    validateOnChange: false,
    // validationSchema: validationSchema,
    validate: (values) => {
      let errors: any = {};
      if (!values.phoneNumber || values.phoneNumber.length !== 10) {
        errors.phoneNumber = "Please enter 10 digit phone number";
      }
      // if (!values.password) {
      //   errors.password = "Please enter password";
      // }
      if (!values.userType) {
        errors.userType = "Please select type of user";
      }
      return errors;
    },
    onSubmit: (values) => {
      // setIsAppLoader(true);
      dispatch(AUTH_ACTIONS.forgotPassword({ formData: values }));
    }
  });

  useEffect(() => {
    // console.log("userState", userState);
    // console.log("Location",location);

    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.FORGOT_PASSWORD_SUCCESS:
        setIsAppLoader(false);
        navigate("/newPassword", {
          state: {
            otp: userState.userDetails.otp ? userState.userDetails.otp.toString() : null,
            phoneNumber: formik.values.phoneNumber,
            userType: formik.values.userType
          }
        });
        break;
      case AUTH_ACTIONS_TYPES.FORGOT_PASSWORD_FAILURE:
        setIsAppLoader(false);
        toast(userState.message, { position: "top-center" });
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
              maxLength={10}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            {formik.errors.phoneNumber && <p className="error-text">{formik.errors.phoneNumber}</p>}
          </div>
          <p>
            <select name="userType" value={formik.values.userType} id="userType" onChange={formik.handleChange}>
              {userTypes.map((userType: any, userInd: number) => {
                return (<option key={`_${userInd}`} value={userType.value}>{userType.name}</option>);
              })}
            </select>
            {formik.touched.userType && formik.errors.userType && <p className='error-text'>{formik.errors.userType}</p>}
          </p>
          <button type="submit" className="btn-common">
            Submit
          </button>
          <button type="button" className="btn-underline" onClick={() => navigate("/login", { replace: true })}>
            Back to login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
