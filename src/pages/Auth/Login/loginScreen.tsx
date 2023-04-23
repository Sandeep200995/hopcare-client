import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams, redirect } from "react-router-dom";
import { storage } from "../../../utills";
import "./login.scss";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext ,AuthContext} from "../../../contexts";
import { toast } from "react-toastify";

function LoginScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params: any = useParams();
  const locationParams: any = useLocation();
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
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
    onSubmit: (values) => {
      setIsAppLoader(true);
      dispatch(AUTH_ACTIONS.authenticateUser({ formData: values }));
    }
  });

  useEffect(() => {
    console.log("params",locationParams);

   }, [locationParams])



  useEffect(() => {
    // console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_SUCCESS:
        setIsAppLoader(false);
        if (locationParams) {
          navigate(`${locationParams.state.pathName}`, { state: locationParams.state.stateData, replace: true })
        } else {
          navigate("/", { replace: true });
        }
        storage.storeData(storage.keys.TOKEN_CL, userState.userDetails.accessToken);
        storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        // storage.storeData(storage.keys.USER_ID, userState.userDetails.userId);
        setIsAuthenticated(true);
        break;
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_NOT_VERIFIED:
        setIsAppLoader(false);
        navigate("/otp", {
          replace: true,
          state: {
            otp: userState.userDetails.otp ? userState.userDetails.otp.toString() : null,
            phoneNumber: formik.values.phoneNumber,
            userType: formik.values.userType,
            password: formik.values.password,
          }
        });
        storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        break;
      case AUTH_ACTIONS_TYPES.AUTHENTICATE_USER_FAILURE:
        setIsAppLoader(false);
        toast(userState.message,{position:"top-center"});
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
          <div className="form-input">
            <input
              type="text"
              placeholder="Mobile number"
              name="phoneNumber"
              maxLength={10}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            {/* <p className="error-text">Please enter phone numer</p> */}
          </div>

          <div className="form-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {/* <p className="error-text">Please enter password</p> */}
          </div>
          <button type="submit" className="btn-common">
            Submit
          </button>

          <button type="button" className="btn-underline">
            {/* New User?  */}
            <span onClick={() =>navigate("/register", { replace: true })}>Register here!</span>{" "}
          </button>
          <div className="flex justify-space-between">
          <button type="button" className="btn-underline">
              Back
            </button>
            <button type="button" className="btn-underline">
              <span onClick={() => navigate("/forgotPassword", { replace: true })}>Forgot Password?</span>{" "}
            </button>

          </div>

        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
