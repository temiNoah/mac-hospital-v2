import { USER_TYPE } from "../components/consts/data";
import { axiosPrivate } from "./axios";
import { APPOINTMENT_STATUS } from '../components/consts/data'
function AppointmentAPI() {

    // console.log("control came into category API !");

    const base_path = "appointment/";

    const createAppointment = async (payload) => {
        const url = base_path + 'book';
        const response = await axiosPrivate().post(url, { ...payload }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }

    const deleteApointment = async (appointmentId) => {

        const url = path + `${appointmentId}`;
        const response = await axiosPrivate().delete(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response


    }

    const updateAppiontment = async (appointment, appointmentId) => {

        const url = path + appointmentId;
        const response = await axiosPrivate().put(url, { ...appointment }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response


    }

    const getAllAppointment = async (userType) => {

        const url = path + userType === USER_TYPE.DOCTOR ? 'doctor-appointment' : 'user-appointment';
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response

    }

    const getAppointmentByStatus = async (status) => {
        const url = path + status === APPOINTMENT_STATUS.PENDING ? 'doctor-pending-appointment' : '';
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }


    return {
        createAppointment,
        getAllAppointment,
        getAppointmentByStatus
    }
}

export default AppointmentAPI;