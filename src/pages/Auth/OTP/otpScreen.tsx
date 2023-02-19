import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../../utills";
import "./otp.scss";
import * as AUTH_API from "../../../redux/saga/auth-saga";
import * as AUTH_ACTIONS from "../../../redux/actions/Auth/authActions";
import * as AUTH_ACTIONS_TYPES from "../../../redux/actions/Auth/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoaderContext, AuthContext } from "../../../contexts";
import { toast } from "react-toastify";

function SignupScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { setIsAuthenticated } = React.useContext(AuthContext);
  // const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { setIsAppLoader } = React.useContext(AppLoaderContext);
  const userState = useSelector((state: any) => state.userData);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      userType: "consumer",
      otp: "",
      password:"",
    },
    validateOnBlur: true,
    validateOnChange: false,
    // validationSchema: validationSchema,
    validate: (values) => {
      let errors: any = {};
      if (!values.otp) {
        errors.otp = "Please enter otp";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log("Values ",values );
      setIsAppLoader(true);
      // dispatch(AUTH_ACTIONS.ver({ formData: values }));
      let req = {
        "phoneNumber": values.phoneNumber,"otp":values.otp.toString(),"userType": values.userType
      };
      try {
        let resp: any = await AUTH_API.verifyUserByOTP(req);
        console.log("response on OTP :::", resp);
        setIsAppLoader(false);
        if (resp.data && resp.status === 200 && resp.data.message) {
          toast(resp.data.message, { position: "top-center" });
          storage.storeData(storage.keys.TOKEN_CL, resp.data.accessToken);
          storage.storeData(storage.keys.USER_TYPE, resp.data.userType);
          // storage.storeData(storage.keys.USER_ID, resp.data.userId);
          setIsAuthenticated(true);
          navigateAndFetchUserDetails(resp.data);
          navigate("/", { replace: true });
          setIsAppLoader(false);
        } else if (resp.data && resp.data.message) {
          toast(userState.message, { position: "top-center" });
        }
      } catch (error: any) {
        setIsAppLoader(false);
        toast(userState.message, { position: "top-center" });
      }
    }
  });

  async function navigateAndFetchUserDetails(userData: any) {
    setIsAppLoader(true);
    dispatch(AUTH_ACTIONS.fetchUserDetails({ formData: {userId:userData.userId, userType: userData.userType }, token: userData.accessToken }))
  }

  useEffect(() => {
    // console.log("location",location);

    if (location && location.state && location.state.otp) {
      formik.setFieldValue('otp', location.state.otp);
      formik.setFieldValue('phoneNumber', location.state.phoneNumber);
      formik.setFieldValue('userType', location.state.userType);
      formik.setFieldValue('password', location.state.password);
    }
  }, [location])

  useEffect(() => {
    // console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.REGISTER_USER_SUCCESS:
        setIsAppLoader(false);
        break;
      case AUTH_ACTIONS_TYPES.REGISTER_USER_FAILURE:
        setIsAppLoader(false);
        toast(userState.message, { position: "top-center" });
        break;
      default:
        break;
    }
  }, [userState.case]);


  async function getOTP() {
    let formData = { phoneNumber: formik.values.phoneNumber, password: formik.values.password, userType: formik.values.userType };
    setIsAppLoader(true);
    try {
      const response: any = await AUTH_API.resendOTPForUnvarifiedUser(formData);
      // console.log("Response ", response);
      if (response.data.user_details && response.status === 200) {
        formik.setFieldValue('otp', response.data.user_details.otp);
        toast(response.data.message, { position: "top-center" });
      }
      setIsAppLoader(false);
    } catch (error: any) {
      setIsAppLoader(false);
      toast("Failed to sent request", { position: "top-center" });
    }
  }

  useEffect(() => {
    console.log("userState", userState);
    switch (userState.case) {
      case AUTH_ACTIONS_TYPES.GET_USER_INFO_SUCCESS:
        setIsAppLoader(false);
        navigate("/", { replace: true });
        storage.storeData(storage.keys.TOKEN_CL, userState.userDetails.accessToken);
        storage.storeData(storage.keys.USER_TYPE, userState.userDetails.userType);
        break;
      case AUTH_ACTIONS_TYPES.GET_USER_INFO_FAILURE:
        setIsAppLoader(false);
        toast(userState.message,{position:"top-center"});
        break;
      default:
        break;
    }
  }, [userState.case]);


  return (
    <div className="form-area">
      <h2>OTP </h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-inner">
          <div className="form-input">
            <input
              type="number"
              placeholder="OTP"
              name="otp"
              maxLength={4}
              onChange={formik.handleChange}
              value={formik.values.otp}
            />
            {formik.errors.otp && <p className="error-text">{formik.errors.otp}</p>}
          </div>
          <button type="button" className="btn-underline"
           onClick={() =>getOTP()}>Resend OTP{" "}
          </button>
          <button type="submit" className="btn-common">
            Submit
          </button>

          {/* <button className="btn-underline" onClick={() => navigate("./login", { replace: true })}>Change Number</button> */}
        </div>
      </form>
    </div>
  );
}

export default SignupScreen;
