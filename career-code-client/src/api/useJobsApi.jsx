import useAxiosSecure from "../hooks/useAxiosSecure";

const useJobsApi = () => {
    const axiosSecure = useAxiosSecure();
    const jobsCreatedByPromise = async (email) => {
        const res = await axiosSecure.get(`/jobs/applications?email=${email}`);
        return res.data;
    };
    return {
        jobsCreatedByPromise,
    };
};

export default useJobsApi;
