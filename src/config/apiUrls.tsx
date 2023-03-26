export const BASE_URL_STAGING = "http://35.154.195.52:4000";
export const BASE_URL_LOCAL = "http://localhost:4000";
// export const BASE_URL_LOCAL = "http://localhost:4000";
export const BASE_URL_V1 = `${BASE_URL_STAGING}/api`;
// export const BASE_URL_V1 = `${BASE_URL_LOCAL}/api`;

export const API_URLS = {
  login: `/user/login`,
  register:`/user/register`,
  verify:`/user/verifyOTP`,
  fetchUserInfo:`/user/profileDetails`,
  forgotPassword: `/user/forgotPassword`,
  changePassword: `/user/changePassword`,
  getAllClnics: "/hospital",
  getClinicInfoById:"/hospital",
  getDashboardDoctorList: "/doctor",
  getDocInfoById: "/doctor",
  currencyRate: "https://api.currencyfreaks.com/latest?apikey=2b3eb37922e24d388c9c4ae3c2e22b7b&symbols="
};

export default API_URLS;
