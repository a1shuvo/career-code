import { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationsList = ({ applicationsPromise }) => {
    const applications = use(applicationsPromise);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                        <ApplicationRow
                            key={application._id}
                            application={application}
                            index={index}
                        ></ApplicationRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationsList;
