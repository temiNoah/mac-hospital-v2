import axios from './axios';

function UserAuthAPI() {
    const base_path = "/";

    const signIn = async (credentials) => {
        const url = base_path + `auth/sign-in`;
        const response = await axios.post(url, { ...credentials }).catch(
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

    const signUp = async (form) => {
        const url = base_path + `auth/create`;
        const response = await axios().post(url, { ...form }).catch(
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

    const registerUser = async (form) => {
        const url = base_path + `auth/register-user`;
        const response = await axios().post(url, { ...form }).catch(
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

    const updateDoctorAvailability = async (form) => {
        const url = base_path + `auth/update-doctor-availability`;
        const response = await axios().post(url, { ...form }).catch(
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

    const updatePassword = async (form) => {
        const url = base_path + `auth/update-password`;
        const response = await axios().post(url, { ...form }).catch(
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
    const verifyToken = async (form) => {
        const url = base_path + `auth/verify-token`;
        const response = await axios().post(url, { ...form }).catch(
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
    const sendPasswordToken = async (form) => {
        const url = base_path + `auth/sendPasswordToken`;
        const response = await axios().post(url, { ...form }).catch(
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
        signIn,
        signUp,
        registerUser,
        updateDoctorAvailability,
        updatePassword,
        verifyToken,
        sendPasswordToken
    }
}
export default UserAuthAPI;