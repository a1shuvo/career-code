import { Suspense } from "react";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import useAuth from "../../hooks/useAuth";
import JobsList from "./JobsList";

const MyPostedJobs = () => {
    const { user } = useAuth();
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
