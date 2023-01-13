/**
 * @summary To show dummy data in statging server in case of not server working
 * @param {*}
 * @returns dummy data PAGE_NAME_THING
 */

import HospitalImg1 from "../assets/dummy/hospital_name.jpeg";
import FatimaHospital from "../assets/dummy/fatima_hospital.jpeg";
import PrakashHospital from "../assets/dummy/prakash_hospital.jpeg";
import FeverProblem from "../assets/dummy/fevertreatment.jpeg";
import Breathless from "../assets/dummy/breathlessness.jpeg";
import StomachPain from "../assets/dummy/stomachpain.jpeg";
import gyaneProblem from "../assets/dummy/gyaneproblem.jpeg";
import Dental from "../assets/dummy/dental-problem.png";
import CoughandCold from "../assets/dummy/coughandcold.jpeg";
import childrenHealth from "../assets/dummy/children-health.jpeg";
import BoneProblem from "../assets/dummy/boneproblem.jpeg";
import SkinProblem from "../assets/dummy/skinproblem.png";
import Gynaecology from "../assets/dummy/top-speciality-gynaecologist.svg";
import Sexology from "../assets/dummy/top-speciality-sexology.svg";
import GeneralPhysician from "../assets/dummy/top-speciality-gp.svg";
import Derma from "../assets/dummy/top-speciality-dermatologist.svg";
import Psychiatry from "../assets/dummy/top-speciality-psychiatric.svg";
import Stomach from "../assets/dummy/top-speciality-stomach.svg";
import Ped from "../assets/dummy/top-speciality-pediatric.svg";
import Urology from "../assets/dummy/top-speciality-kidney.svg";


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
  DASHBOARD_SPECILITY_LIST: {
    total: 0,
    list: [
      {
        img:Gynaecology,
        name: "Gynaecology",
        price: 499,
        id:Math.floor(Math.random() *1000),
      },
      {
        img:Sexology,
        name: "Sexology",
        price: 399,
        id:Math.floor(Math.random() *1000),
      },
      {
        img:GeneralPhysician,
        name: "General Physician",
        price: 799,
        id:Math.floor(Math.random() *1000),
      },
      {
        img:Derma,
        name: "Dermatology",
        price: 899,
        id:Math.floor(Math.random() *1000),
      },
      {
        img:Psychiatry,
        name: "Psychiatry",
        price: 1099,
        id:Math.floor(Math.random() *1000),
      },
      {
        img:Stomach,
        name: "Stomach and digestion",
        price: 1099,
        id:Math.floor(Math.random() *1000),
      },
    ]
  },

  DASHBOARD_DOCTORS_LIST: {
    total: 0,
    list: [
      // {
      //   name: "Swastika Hospital",
      //   address: "Behind Bunayi Vidyalay, Shahadatpura, Mau ",
      //   // img: HospitalImg1,
      //   id: 12345
      // },
      // {
      //   name: "Fatima Hospital",
      //   address: "Imilya, Mau",
      //   // img: FatimaHospital,
      //   id: 13456
      // },
      // {
      //   name: "Prakash Hospital",
      //   address: "Sahadatpura, Mau",
      //   // img: PrakashHospital,
      //   id: 17876
      // }
    ]
  },
  DASHBOARD_HEALTH_LIST: {
    total: 0,
    list: [
      {
        name: "Fever Problem",
        id:Math.floor(Math.random() *1000),
        img: FeverProblem
      },
      {
        name: "Breasthlessness",
        id:Math.floor(Math.random() *1000),
        img: Breathless
      },
      {
        name: "Stomach Pain",
        id:Math.floor(Math.random() *1000),
        img: StomachPain
      },
      {
        name: "Gyane Problem",
        id:Math.floor(Math.random() *1000),
        img: gyaneProblem
      },
      {
        name: "Dental Problem",
        id:Math.floor(Math.random() *1000),
        img: Dental
      },
      {
        name: "Cough and Cold",
        id:Math.floor(Math.random() *1000),
        img: CoughandCold
      },
      {
        name: "Children Health Care",
        id:Math.floor(Math.random() *1000),
        img: childrenHealth
      },
      {
        name: "Bone Problem",
        id:Math.floor(Math.random() *1000),
        img: BoneProblem
      },
      {
        name: "Skin Problem",
        id:Math.floor(Math.random() *1000),
        img: SkinProblem
      },
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
