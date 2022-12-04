// export const BASE_URL = "https://care-hope.herokuapp.com";
// export const BASE_URL = "https://care-hope-server.herokuapp.com";
export const BASE_URL = "https://hope-care-server.herokuapp.com";

// export const BASE_URL = "http://localhost:4000";
export const BASE_URL_V1 = `${BASE_URL}/api`;

export const API_URLS = {
  login: `/user/login`,
  forgotPassword: `/user/forgotPassword`,
  getAllClnics: "/hospital",
  getClinicInfoById: "/hospital",
  getDashboardDoctorList: "/doctor",
  getDocInfoById: "/doctor",
  currencyRate: "https://api.currencyfreaks.com/latest?apikey=2b3eb37922e24d388c9c4ae3c2e22b7b&symbols="
};

export default API_URLS;
