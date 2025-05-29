import { Suspense } from "react";
import ApplicationsList from "./ApplicationsList";
import ApplicationsStat from "./ApplicationsStat";

const MyApplications = () => {
    return (
        <div className="text-center py-5 space-y-5">
            <ApplicationsStat></ApplicationsStat>
            <Suspense fallback={"Loading your applications..."}>
                <ApplicationsList></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
