import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';

interface modalProps {
    visible: Boolean;
    callback?: any;
}
export default function AppointmentModal(modalProps: modalProps) {
    const [modalToggle, setModalToggle]: any = useState(false);

    useEffect(() => {
        setModalToggle(modalProps.visible);
    }, [modalProps.visible])


    const [initialFormValues, setInitialValues]: any = useState({
        ptFirstName: "",
        ptLastName: "",
        ptPhoneNumber: "",
        ptAge: "",
        ptPaymentMode: "CASH",
        ptPaymentStatus: "Completed",
        ptAddress: "",
        // clinicId:null,
        ptGender: "",
        appointmentDate: ""
    });
    const formRef: any = useRef();
    const appointmentFormik: any = useFormik({
        innerRef: formRef,
        initialValues: initialFormValues,
        enableReinitialize: true,
        validateOnChange: false,
        validateOnBlur: false,
        // validationSchema
        validate: (values) => {
            // console.log("validate ", values);
            const errors: any = {};
            if (!values.ptFirstName) {
                errors.ptFirstName = "*Please enter first name";
            }
            if (!values.ptPhoneNumber) {
                errors.ptPhoneNumber = "*Please enter phone number";
            }
            if (!values.appointmentDate) {
                errors.appointmentDate = "*Please enter appointment date";
            }
            if (!values.ptAge) {
                errors.ptAge = "*Please enter age";
            }
            if (!values.ptGender) {
                errors.ptGender = "*Please select patient gender";
            }
            if (!values.ptAddress) {
                errors.ptAddress = "*Please select patient address";
            }
            console.log("Form Errors ", errors);
            return errors;
        },
        onSubmit: (values) => {
            // console.log("Values ", values);
            //   handleSubmit(values);
            handleSubmit();
        }
    });

    function handleSubmit() {
        // console.log("Values ", appointmentFormik.values);
        let formValue = JSON.parse(JSON.stringify(appointmentFormik.values));
        if (formValue.ptPhoneNumber) {
            formValue.ptPhoneNumber = formValue.ptPhoneNumber.toString();
        }
        if (formValue.appointmentDate) {
            formValue.appointmentDate = new Date(formValue.appointmentDate).toISOString();
        }
        // console.log("formValue",formValue);
        modalProps.callback({ type: "appointmentFormSubmit", data: { formValue } });
        clearFormFields();
    }

    function clearFormFields() {
        setInitialValues({
            ptFirstName: "",
            ptLastName: "",
            ptPhoneNumber: "",
            ptAge: "",
            ptPaymentMode: "CASH",
            ptPaymentStatus: "Completed",
            ptAddress: "",
            // clinicId:null,
            ptGender: "",
            appointmentDate: ""
        })
    };

    return (
        <div className={modalToggle ? "modal" : "modal hidden"}>
            <button onClick={() => {
                modalProps.callback({ type: "toggleModal", state: !modalToggle })
                setModalToggle(!modalToggle)
            }} className="btn--close-modal">&times;</button>
            <h2 className="modal__header">
                Book your <span className="highlight">appointment</span>
            </h2>
            <form className="modal__form" noValidate onSubmit={appointmentFormik.handleSubmit}>
                <label>First Name</label>
                <p>
                    <input type="text" name="ptFirstName" value={appointmentFormik.values.ptFirstName} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.ptFirstName && appointmentFormik.errors.ptFirstName && <span className='error-text'>{appointmentFormik.errors.ptFirstName}</span>}
                </p>
                <label>Last Name</label>
                <p>
                    <input type="text" name="ptLastName" value={appointmentFormik.values.ptLastName} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.ptLastName && appointmentFormik.errors.ptLastName && <span className='error-text'>{appointmentFormik.errors.ptLastName}</span>}
                </p>
                <label>Phone Number (+91)</label>
                <p>
                    <input type="number" name="ptPhoneNumber" value={appointmentFormik.values.ptPhoneNumber} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.ptPhoneNumber && appointmentFormik.errors.ptPhoneNumber && <span className='error-text'>{appointmentFormik.errors.ptPhoneNumber}</span>}
                </p>
                <label>Age</label>
                <p>
                    <input type="number" name="ptAge" value={appointmentFormik.values.ptAge} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.ptAge && appointmentFormik.errors.ptAge && <span className='error-text'>{appointmentFormik.errors.ptAge}</span>}
                </p>

                <label>Gender</label>
                <p>
                    <select name="ptGender" value={appointmentFormik.values.ptGender} id="pt_Gender" onChange={appointmentFormik.handleChange}>
                        <option value="">Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    {appointmentFormik.touched.ptGender && appointmentFormik.errors.ptGender && <span className='error-text'>{appointmentFormik.errors.ptGender}</span>}
                </p>
                <label>Address</label>
                <p>
                    <input type="text" name="ptAddress" value={appointmentFormik.values.ptAddress} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.ptAge && appointmentFormik.errors.ptAge && <span className='error-text'>{appointmentFormik.errors.ptAge}</span>}
                </p>
                <label>Appointment date</label>
                <p>
                    <input type="date" name="appointmentDate" min={new Date().toISOString().split("T")[0]} max={new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).toISOString().split("T")[0]} value={appointmentFormik.values.appointmentDate} onChange={appointmentFormik.handleChange} />
                    {appointmentFormik.touched.appointmentDate && appointmentFormik.errors.appointmentDate && <span className='error-text'>{appointmentFormik.errors.appointmentDate}</span>}
                </p>
                {/* <button type='button' onClick={() => handleSubmit()} className="btn">Confirm &rarr;</button> */}
                <button type='submit' className="btn">Confirm &rarr;</button>
            </form>
        </div>
    )
}