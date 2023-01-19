import React from 'react'

const ModalConfirm = () => {
    return (
        <>
        {/* Modal Confirm */}
        {/* hidden */}
        <div  className="overlay"></div>
			<div className="modal confrim">
				<button className="btn--close-modal">&times;</button>

				<h2 className="modal__header">
					Appointment booking<span className="highlight">confirm</span>
				</h2>
                <div className="green"></div>
                <div className="flex-center margin-top-1">
                    <button className="btn">Ok</button>
                </div>
			</div>

            {/* Modal Error */}
            {/* <div  className="overlay"></div>
			<div className="modal confrim">
				<button className="btn--close-modal">&times;</button>

				<h2 className="modal__header">
					Appointment booking<span className="highlight error"> canceled</span>
				</h2>
                <div className="error-tag"></div>
                <div className="flex-center margin-top-1">
                    <button className="btn">Ok</button>
                </div>
			</div> */}
        </>
    )
}

export default ModalConfirm
