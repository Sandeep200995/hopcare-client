import './booking.scss';
const Booking = () => {

	return (
		<>
			<div className='booking-page'>
				<div className='booking-card'>
					{/* <img src={ImgHosp} /> */}
					<div className='booking-card-inner'>
						<span>Current</span>
						<h5>Patient Details</h5>
                        <p>first name last name age gender</p>
						{/* <p>{`${ptFirstName ? ptFirstName : ""} ${ptLastName ? ptLastName : ""} ${ptAge ? ptAge : ""}/${ptGender ? ptGender : ""}`}</p> */}
						<h5>Appointment Details</h5>
                        <p>date</p>
						{/* <p>{`${appointmentDate ? moment(appointmentDate).format("dddd D MMM YY") : " - "}`}</p> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Booking;