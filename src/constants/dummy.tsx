/**
 * @summary To show dummy data in statging server in case of not server working
 * @param {*}
 * @returns dummy data PAGE_NAME_THING
 */

import HospitalImg1 from "../assets/dummy/hospital_name.jpeg";
import FatimaHospital from "../assets/dummy/fatima_hospital.jpeg";
import PrakashHospital from "../assets/dummy/prakash_hospital.jpeg";
export const DEFAULT_DUMMY_DATA = {
  DASHBOARD_CLINIC_LIST: {
    total: 0,
    list: [
      {
        name: "Swastika Hospital",
        address: {
          buildingName: "Sharda Building",
          buildingNo: "A2",
          addressLine1: "Shahadatpura",
          addressLine2: "",
          city: "Mau",
          pinCode: "275101",
          state: "Uttar Pradesh",
          coordinates: {
            lat: 26,
            lng: 64
          }
        },
        img: HospitalImg1,
        _id: 12345
      },
      {
        name: "Fatima Hospital",
        address: {
          buildingName: "Sharda Building",
          buildingNo: "A2",
          addressLine1: "Shahadatpura",
          addressLine2: "",
          city: "Mau",
          pinCode: "275101",
          state: "Uttar Pradesh",
          coordinates: {
            lat: 26,
            lng: 64
          }
        },
        img: FatimaHospital,
        _id: 13456
      },
      {
        name: "Prakash Hospital",
        address: {
          buildingName: "Sharda Building",
          buildingNo: "A2",
          addressLine1: "Shahadatpura",
          addressLine2: "",
          city: "Mau",
          pinCode: "275101",
          state: "Uttar Pradesh",
          coordinates: {
            lat: 26,
            lng: 64
          }
        },
        img: PrakashHospital,
        _id: 17876
      }
    ]
  },
  DASHBOARD_DOCTORS_LIST: {
    total: 0,
    list: [
      {
        name: "Swastika Hospital",
        address: "Behind Bunayi Vidyalay, Shahadatpura, Mau ",
        // img: HospitalImg1,
        id: 12345
      },
      {
        name: "Fatima Hospital",
        address: "Imilya, Mau",
        // img: FatimaHospital,
        id: 13456
      },
      {
        name: "Prakash Hospital",
        address: "Sahadatpura, Mau",
        // img: PrakashHospital,
        id: 17876
      }
    ]
  },
  CLINIC_INFO_FAQ: [
    {
      quest: "Where does Dr.Rakesh practice",
      ans: "Sharada Narayan Hospital"
    },
    {
      quest: "Why do patients visits Dr.Rakesh",
      ans: "He is most searched neurologist in this area"
    }
  ],
  CLINIC_INFO_DETAIL: {
    name: "Buddha Eye Care",
    address: {
      buildingName: "Sharda Building",
      buildingNo: "A2",
      addressLine1: "Shahadatpura",
      addressLine2: "",
      city: "Mau",
      pinCode: "275101",
      state: "Uttar Pradesh",
      coordinates: {
        lat: 26,
        lng: 64
      }
    },
    img: HospitalImg1,
    id: 12345,
    doctors: [
      {
        name: "Dr. Aryan Agarwal",
        specialities: ["Eye"],
        designations: [],
        daysTimings: [
          { type: "Mon-Fri", timing: ["1 pm - 2 pm"] },
          { type: "Sat-Sun", timing: ["3 pm - 4 pm"] }
        ]
      }
    ]
  }
};
