//Initial States
//User Data
export const userData = {
  // currentLang: LANGUAGE.default.EN,
  loading: false,
  loadingtxt: "",
  userDetails: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePic: null,
    appVersion: null,
    storeVersion: null,
    accessToken: null,
    OTP: null,
    userType: "consumer"
  },
  // profileImgKey:null,
  // currentLocation: { coords: { lat: 27.7878, lng: 77.7257657 } }
  currentLocation: {
    // coords: { lat: -74.04564776680348, lng: 40.99908119401048 }
    // coords: dummyLatLongCoordinate
    // coords: { lat: null, lng: null }
  }
  // userDeviceInfo: {
  //   fcmToken: null,
  //   isSubmitted: false
  // },
  // moduleVersion: [],
  // askForUpdate: {
  //   status: null
  // },
  // version: {
  //   app: null,
  //   store: null
  // }
  // const currentLocation = [41.00097270210998, -74.04430997788678];
};

export const clinicData = {
  loading: false,
  loadingtxt: "",
  dashboardClinicData: {
    list: [],
    total: 0
  }
};

export const doctorData = {
  loading: false,
  loadingtxt: "",
  dashboardDoctorData: {
    list: [],
    total: 0
  }
};
