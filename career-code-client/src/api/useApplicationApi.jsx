import useAxiosSecure from "../hooks/useAxiosSecure";

const useApplicationApi = () => {
    const axiosSecure = useAxiosSecure();
    const myApplicationsPromise = async (email) => {
        const res = await axiosSecure.get(`/applications?email=${email}`);
        return res.data;
    };
    return {
        myApplicationsPromise,
    };
};

export default useApplicationApi;
