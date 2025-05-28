import { useLoaderData } from "react-router";

const JobDetails = () => {
    const { title, location, description, company, salaryRange } =
        useLoaderData();
    return (
        <div className="m-4 p-4 card shadow-2xl">
            <h2 className="text-3xl">{title}</h2>
            <p>
                Salary:{" "}
                {`${salaryRange.min} to ${salaryRange.max} ${salaryRange.currency}`}
            </p>
            <p>Company: {company}</p>
            <p>Location: {location}</p>
            <p>Description: {description}</p>
            <br />
            <div className="text-right">
                <button className="btn btn-primary">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;
