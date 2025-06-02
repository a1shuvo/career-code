import { Suspense } from "react";
import useApplicationApi from "../../api/useApplicationApi";
import useAuth from "../../hooks/useAuth";
import ApplicationsList from "./ApplicationsList";
import ApplicationsStat from "./ApplicationsStat";

const MyApplications = () => {
    const { user } = useAuth();
    const { myApplicationsPromise } = useApplicationApi();
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
                    applicationsPromise={myApplicationsPromise(
                        user.email
                    )}
                ></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
