import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCustomToast = (toastProps: any) => {
    // const [showToast] = toast(message);
    const showToastMesage = (message: any, color?: any, duration?: any) => {
        let toast_duration: any = 3000;
        let toast_color: any = "success";
        if (duration) {
            toast_duration = duration;
        }
        if (color) {
            toast_color = color;
        }
        // showToast({
        //     message: message,
        //     duration: toast_duration,
        //     color: toast_color
        // });
        toast(toastProps);
    };
    return { showToastMesage };
    // return toast(toastProps);
};


export default useCustomToast;