import React, { useCallback, useEffect, useState } from "react";

import "./clinicProfileScreen.scss";

import drImage from "../../../images/dr.jpg";
import starIcon from "../../../assets/dummy/star.svg";
import Certi from "../../../assets/dummy/certificate.png";
import UserIcon from "../../../assets/dummy/user.svg";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getClinicDetailsById } from "../../../redux/saga/clinicSaga";

function ProfileScreen() {
	const history: any = useNavigate();
	const location: any = useLocation();
	const params: any = useParams();
	const [clinicinfo, setClinicInfo]: any = useState({ _id: null });
	const [modalToggle, setModalToggle] = useState(false);


	useEffect(() => {
		// console.log("params", params);
		getClinicDetails();
	}, [params])

	const getClinicDetails = useCallback(async () => {
		// console.log("params", params);
		if (params && params.id) {
			try {
				let resp: any = await getClinicDetailsById({ formData: { clinicId: params.id } });
				console.log("resp @ page ", resp.data);
				if (resp) {
					setClinicInfo(resp.data.data ? resp.data.data : { _id: null });

				} else {
					toast(resp.data.message)
				}
			} catch (error: any) {
				let msg: any = error.message ? error.message : "Failed to fetch details"
				toast(msg, { position: "top-center" });
			}
		}
	}, [params])


	const renderClinicBasicinfo = useCallback(() => {
		console.log("info", clinicinfo);
		const { name } = clinicinfo;
		if (clinicinfo._id) {
			return (
				<div className='dr-details-page'>
					<div className='dr-details-inner'>
						<div className="dr-img-box">
							<img src={drImage} alt='doctor-details' />
						</div>
						<div className='dr-details-tag'>
							<div className='dr-name-details'>
								<div>
									<h2>
										{name ? name : ""}
										{/* {`Dr ${firstName ? firstName : " - "} ${lastName ? lastName : " - "}`} <span>(Dentist)</span> */}
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

							<div className='dr-description'>
								<h5>Description</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore, enim! Ullam explicabo voluptates incidunt mollitia
									dolorem maiores praesentium rerum, enim adipisci
									exercitationem culpa id. Libero eos dicta sapiente mollitia.
								</p>
							</div>

							<div className='dr-availibility'>
								<h5>Available at Clinics</h5>
								{[].map((clinic, cId) => {
									// const {} = clinic;
									return (
										<>
											<div className='btn-call-book'>
												<p>1. Fatima Hospital</p>
												{/* <button className='btn-grad'>Call for appointment</button> */}
												<button
													// onClick={() => toggleAppointmentForm(!appontmentForm)}
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
								<div className='btn-call-book'>
									<p>2. Prakash Hospital</p>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}, [clinicinfo])

	return (
		<>
			<div>
				<div>
					<button onClick={() => history('/')} className="btn-back">&larr;</button>
				</div>
				{/* <header className="App-header">    </header> */}
				{renderClinicBasicinfo()}
			</div>
			<div onClick={() => setModalToggle(!modalToggle)} className={modalToggle ? "overlay" : "overlay hidden"}></div>
			<div className={modalToggle ? "modal" : "modal hidden"}>
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
			</div>
		</>
	);
}

export default ProfileScreen;
