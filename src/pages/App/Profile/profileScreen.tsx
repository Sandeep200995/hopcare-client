import React from "react";
import "./profileScreen.scss";
import drImage from "../../../images/dr.jpg";

function ProfileScreen() {
  return (
    <div className="App">
      <header className="App-header">    </header>

      <div className='dr-details-page'>
					<div className='dr-details-inner'>
						<img src={drImage} alt='doctor-details' />
						<div className='dr-details-tag'>
							<div className='dr-name-details'>
								<div>
									<h2>
                    DR XYZ
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
									{/* <PersonIcon /> */}
									3000+
								</p>
								<p className='icon-expr'>
									{/* <MedicalServicesIcon /> */}
									7+ experience
								</p>
								<p className='icon-expr'>
									{/* <StarsIcon /> */}
									4.7
								</p>
							</div>

							<div className='dr-description'>
								<h5>Description</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore, enim! Ullam explicabo voluptates incidunt mollitia
									amet dolorem maiores praesentium rerum, enim adipisci
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

    </div>
  );
}

export default ProfileScreen;
