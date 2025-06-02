import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();

    // request interceptor
    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
    });

    // response interceptor
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        console.log("SignOut user for bad status code!");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
