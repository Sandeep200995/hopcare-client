import { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./doctorProfileScreen.scss";

import drImage from "../../../images/dr.jpg";
import starIcon from "../../../assets/dummy/star.svg";
import Certi from "../../../assets/dummy/certificate.png";
import UserIcon from "../../../assets/dummy/user.svg";
// import * as CONSTANTS from '../../../constants/dummy';
import * as ClinicAPIS from '../../../redux/saga/clinicSaga';

import { getDoctorDetailsById } from "../../../redux/saga/doctorSaga";
import { getClinicDetailsById } from "../../../redux/saga/clinicSaga";
import { AppLoaderContext } from "../../../contexts";
import AppointmentModal from "../../../components/modal/appointmentModal";
import { useSelector } from "react-redux";



function ProfileScreen() {
	const history: any = useNavigate();
	// const location: any = useLocation();
	const navigate = useNavigate();
	const params: any = useParams();
	const userState:any = useSelector((state:any)=>state.userData);
	const {setIsAppLoader } = useContext(AppLoaderContext);
	const [doctorinfo, setDoctorInfo]: any = useState({ _id: null ,hospitalListDetails:[]});
	const [appontmentForm, toggleAppointmentForm] = useState(false);
	const [appointmentFormData, setAppointmentFormData]: any = useState({ clinicId: null });

	useEffect(() => { getClinicDetails(); }, [params])

	const getClinicDetails = useCallback(async () => {
		if (params && params.id) {
			try {
				let resp: any = await getDoctorDetailsById({ formData: { doctorId: params.id } });
				if (resp && resp.data && resp.data.data && resp.data.data.hospitals.length > 0) {
					let hospitalInfoList: any = [];
					for (let i = 0; i < resp.data.data.hospitals.length; i++) {
						hospitalInfoList.push(await getClinicDetailsById({ formData: { clinicId: resp.data.data.hospitals[i] } }))
					}
					let respList: any = await Promise.all(hospitalInfoList);
					let clinicDetailList:any = [];
					for (let j = 0; j < respList.length; j++) {
						clinicDetailList.push(respList[j].data.data ? respList[j].data.data : {})
					}
					if (respList) {
						setDoctorInfo(resp.data.data ? { ...resp.data.data, hospitalListDetails: clinicDetailList } : { _id: null });
					}
					setIsAppLoader(false);
				} else {
					setDoctorInfo(resp.data.data ? resp.data.data : { _id: null });
					setIsAppLoader(false);
					toast(resp.data.message, { position: "top-center" });
				}
			} catch (error: any) {
				setIsAppLoader(false);
				let msg: any = error.message ? error.message : "Failed to fetch details"
				toast(msg, { position: "top-center" });
			}
		}
	}, [params])


	const renderDoctorinfo = useCallback(() => {
		const { firstName, lastName, profilePic, degree, departments,hospitalListDetails } = doctorinfo;
		if (doctorinfo._id) {
			return (
				<div className='dr-details-page'>
					<div className='dr-details-inner'>
						<div className="dr-img-box">
							<img src={profilePic ? profilePic : drImage} alt='doctor-details' />
						</div>
						<div className='dr-details-tag'>
							<div className='dr-name-details'>
								<div>
									<h2>
										{`Dr ${firstName ? firstName : " - "} ${lastName ? lastName : " - "}`} {degree && degree.length > 0 ? <span>{degree.join(",")}</span> : null}
									</h2>
									{/* <p className='dr-icon-tag'>
									<img src={ToothImg} alt='tooth-doctor' />
									Tooth specialist
								</p> */}
								</div>
								{/* <p className='price'>₹290/day</p> */}
							</div>
							<div className='experince-details'>
								<p className='icon-expr'>
									<img src={UserIcon} alt="person" />
									3000+
								</p>
								<p className='icon-expr'>
									<img src={Certi} alt="experience" />
									7+ experience
								</p>
								<p className='icon-expr'>
									{/* <StarsIcon /> */}
									<img src={starIcon} alt="star icon" />
									4.7
								</p>
							</div>

							{departments.length > 0 ? <div className='dr-description'>
								<h5>Description</h5>
								<p>
									{/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore, enim! Ullam explicabo voluptates incidunt mollitia
									dolorem maiores praesentium rerum, enim adipisci
									exercitationem culpa id. Libero eos dicta sapiente mollitia. */}
									{/* {CONSTANTS.DEFAULT_DUMMY_DATA.CLNIC_INFO_DESCRIPTION} */}
									{`${departments.join(",")}`}
								</p>
							</div> : null}

							<p>
								<h5>Appointment Fee</h5>
								<p>₹ 200 /- </p>
							</p>

							<div className='dr-availibility'>
								<h5>Available at Clinics</h5>
								{hospitalListDetails && hospitalListDetails.length > 0 && hospitalListDetails.map((clinic: any, cId: number) => {
									const {name} = clinic;
									// console.log("clinic",clinic);
									return (
										<>
											<div className='btn-call-book'>
												<p>{`${cId+1}. ${name}`}</p>
												{/* <button className='btn-grad'>Call for appointment</button> */}
												<button
													onClick={() => {
														console.log("userState", userState);
														if (userState && userState.userDetails && userState.userDetails._id) {
															setAppointmentFormData({clinicId:clinic._id});
															toggleAppointmentForm(!appontmentForm)
														} else {
															navigate("/login", {
																replace: true, state: {
																	data: {
																		pathName: `./doctor/${params.id}`,
																		stateData: { _id: params.id }
																	}
																}
															})
														}
													}}
													className='btn-grad'>
													Book for appointment
												</button>
											</div>
											<div className='available-times-tag'>
												<h5>Available-time</h5>
												<div className='available-time'>
													<p>{/* <TodayIcon /> */}</p>
													<div className='dr-day-avail'>
														<p>Mon</p>
														<p className='font9'>2-5 PM</p>
													</div>
													<div className='dr-day-avail'>
														<p>Tues</p>
														<p className='font9'>2-5 PM</p>
													</div>
													<div className='dr-day-avail'>
														<p>Wed</p>
														<p className='font9'>2-5 PM</p>
													</div>
													<div className='dr-day-avail'>
														<p>Thus</p>
														<p className='font9'>2-5 PM</p>
													</div>
													<div className='dr-day-avail'>
														<p>Fri</p>
														<p className='font9'>2-5 PM</p>
													</div>
													<div className='dr-day-avail'>
														<p>Sat</p>
														<p className='font9'>2-5 PM</p>
													</div>
												</div>
											</div>

										</>
									)
								})
								}
								{/* <div className='btn-call-book'>
									<p>2. Sharda Narayan hospital</p>
									<button
										onClick={() => setModalToggle(!modalToggle)}
										// onClick={() => history('./appointment-confirm')}
										// onClick={() => toggleAppointmentForm(!appontmentForm)}

										className='btn-grad'>
										Book appointment
									</button>
								</div>
								<div className='available-times-tag'>
									<h5>Available-time</h5>
									<div className='available-time'>
										<div className='dr-day-avail'>
											<p>Mon</p>
											<p className='font9'>2-5 PM</p>
										</div>
										<div className='dr-day-avail'>
											<p>Tues</p>
											<p className='font9'>2-5 PM</p>
										</div>
										<div className='dr-day-avail'>
											<p>Wed</p>
											<p className='font9'>2-5 PM</p>
										</div>
										<div className='dr-day-avail'>
											<p>Thus</p>
											<p className='font9'>2-5 PM</p>
										</div>
										<div className='dr-day-avail'>
											<p>Fri</p>
											<p className='font9'>2-5 PM</p>
										</div>
										<div className='dr-day-avail'>
											<p>Sat</p>
											<p className='font9'>2-5 PM</p>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			);
		}
	}, [doctorinfo])


	function handleAppointmentCallbacks(callBacks: any) {
		console.log("callBacks", callBacks);
		if (callBacks && callBacks.type === "toggleModal") {
			toggleAppointmentForm(callBacks.state);
		} else if (callBacks && callBacks.type === "appointmentFormSubmit") {
			console.log("callBacks data ", callBacks.data);
			// return
			submitAppointData(callBacks.data);
			toggleAppointmentForm(callBacks.state);
		}
	}


	async function submitAppointData(formData: any) {
		try {
			let response: any = await ClinicAPIS.createAppointment({ formData: { ...formData.formValue, clinicId: appointmentFormData.clinicId } });
			// console.log("response @ Page ", response);
			let msg = "Something is wrong";
			if (response && response.status === 200) {
				console.log("A");
				msg = response.data.message ? response.data.message : "Appointment Created";
			} else if (response && response.status === 401 && response.data && response.data.message) {
				msg = response.data.message;
			}
			toast(msg, { position: "top-center" });
		} catch (error: any) {
			console.log("error", error);
			let msg = 'Failed to send request';
			toast(msg, { position: "top-center" });
		}
	}

	return (
		<>
			<div>
				<div>
					<button onClick={() => history('/')} className="btn-back">&larr;</button>
				</div>
				{/* <header className="App-header">    </header> */}
				{renderDoctorinfo()}
			</div>
			<AppointmentModal visible={appontmentForm} callback={handleAppointmentCallbacks} />
			<div onClick={() => toggleAppointmentForm(!appontmentForm)} className={appontmentForm ? "overlay" : "overlay hidden"}></div>

			{/* <div className={modalToggle ? "modal" : "modal hidden"}>
				<button onClick={() => setModalToggle(!modalToggle)} className="btn--close-modal">&times;</button>
				<h2 className="modal__header">
					Book your <span className="highlight">appointment</span>
				</h2>
				<form className="modal__form">
					<label>First Name</label>
					<input type="text" />
					<label>Last Name</label>
					<input type="text" />
					<label>Email Address</label>
					<input type="email" />
					<label>Phone Number</label>
					<input type="number" />
					<label>Age</label>
					<input type="number" />
					<label>Gender</label>
					<input type="text" />
					<label>Address</label>
					<input type="text" />
					<label>Appointment date</label>
					<input type="date" />
					<button className="btn">Confirm &rarr;</button>
				</form>
			</div> */}
		</>
	);
}

export default ProfileScreen;
