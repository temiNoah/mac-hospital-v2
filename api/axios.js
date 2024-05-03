import axios from 'axios';
const BASE_URL = process.env.EXPO_PUBLIC_API_URL  //'http://localhost:5000/api';

console.log(" base url:", BASE_URL)

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});