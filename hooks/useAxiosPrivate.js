import axios, { axiosPrivate } from "../api/axios";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";


const useAxiosPrivate = () => {
    const [user, setUser] = useContext(UserContext);
    let requestIntercept = null
    let responseIntercept = null

    useEffect(() => {

        return () => {
            console.log("unMounts Access token:" + user?.accessToken)
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    })

    const getClient = () => {
        console.log("Private Axios has Access token:" + user?.accessToken)

        requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                // console.log("request intercepted")
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    console.log("rf token");

                    prevRequest.sent = true;

                    const url = `/${user?.userType}/refresh_token`;

                    await axios.get(url).then(({ data, status }) => {
                        console.log("rf_token:" + JSON.stringify(data))
                        const newAccessToken = data.accessToken;
                        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                    }).catch((err) => {
                        console.log("unable to get refresh token")
                    });



                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );
        return axiosPrivate
    }

    return getClient;


}

export default useAxiosPrivate;