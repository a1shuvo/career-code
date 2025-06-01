import { Suspense } from "react";
import { applicationsPromise } from "../../api/applicationsApi";
import useAuth from "../../hooks/useAuth";
import ApplicationsList from "./ApplicationsList";
import ApplicationsStat from "./ApplicationsStat";

const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div className="text-center py-5 space-y-5">
            <ApplicationsStat></ApplicationsStat>
            <br />
            <Suspense
                fallback={
                    <span className="loading loading-ring loading-xl"></span>
                }
            >
                <ApplicationsList
                    applicationsPromise={applicationsPromise(
                        user.email,
                        user.accessToken
                    )}
                ></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
