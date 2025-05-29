import axios from "axios";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const ApplyJob = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();

    const handleApplyForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume,
        };

        // send data to db
        axios
            .post("http://localhost:3000/applications", application)
            .then((res) => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You applied for the job successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="text-center py-4">
            <div className="text-3xl">
                Apply Job{" "}
                <span className="btn btn-sm btn-primary">
                    <Link to={`/jobs/${jobId}`}>Job Details</Link>
                </span>
                <form onSubmit={handleApplyForm}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                        <label className="label">LinkedIn Link</label>
                        <input
                            type="url"
                            name="linkedin"
                            className="input"
                            placeholder="Input Your LinkedIn Profile URL"
                        />

                        <label className="label">Github Link</label>
                        <input
                            type="url"
                            name="github"
                            className="input"
                            placeholder="Input Your Github Profile URL"
                        />

                        <label className="label">Resume Link</label>
                        <input
                            type="url"
                            name="resume"
                            className="input"
                            placeholder="Input Your Resume URL"
                        />
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Apply"
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ApplyJob;
