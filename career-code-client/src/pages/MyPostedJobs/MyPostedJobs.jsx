import { Suspense } from "react";
import useJobsApi from "../../api/useJobsApi";
import useAuth from "../../hooks/useAuth";
import JobsList from "./JobsList";

const MyPostedJobs = () => {
    const { user } = useAuth();
    const { jobsCreatedByPromise } = useJobsApi();
    return (
        <div>
            <h2 className="text-3xl text-center">My Posted Jobs</h2>
            <Suspense
                fallback={
                    <span className="loading loading-ring loading-xl"></span>
                }
            >
                <JobsList
                    jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
                ></JobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
