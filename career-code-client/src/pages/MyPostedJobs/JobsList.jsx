import { use } from "react";
import { Link } from "react-router";

const JobsList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Deadline</th>
                        <th>Count</th>
                        <th>Applications</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.applicationDeadline}</td>
                            <td>0</td>
                            <td>
                                <Link
                                    className="btn btn-sm btn-outline btn-primary"
                                    to={`/applications/${job._id}`}
                                >
                                    View Applications
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobsList;
