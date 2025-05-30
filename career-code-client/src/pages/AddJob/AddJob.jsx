const AddJob = () => {
    const handleAddJobForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    return (
        <div>
            <h2 className="text-3xl text-center">Please Add A Job</h2>
            <form onSubmit={handleAddJobForm}>
                {/* Basic Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Job Title"
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name="company"
                        className="input"
                        placeholder="Company Name"
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input"
                        placeholder="Company Location"
                    />

                    <label className="label">Company Logo</label>
                    <input
                        type="url"
                        name="compnay_logo"
                        className="input"
                        placeholder="Company Logo URL"
                    />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="jobType"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="On-Site"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Remote"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Hybrid"
                        />
                    </div>
                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" className="select">
                        <option disabled={true}>Select Category</option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Designing</option>
                    </select>
                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">
                        Application Deadline
                    </legend>
                    <input type="date" className="input" />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                type="text"
                                name="min"
                                className="input"
                                placeholder="Minimum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                                type="text"
                                name="max"
                                className="input"
                                placeholder="Maximum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Select Currency"
                                name="currency"
                                className="select"
                            >
                                <option disabled={true}>Select Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>JPY</option>
                                <option>EUR</option>
                                <option>AUD</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea
                        className="textarea"
                        name="description"
                        placeholder="Job Description"
                    ></textarea>
                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">
                        Job Requirements
                    </legend>
                    <textarea
                        className="textarea"
                        name="requirements"
                        placeholder="Job Requirements (Separate by comma)"
                    ></textarea>
                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">
                        Job Responsibilities
                    </legend>
                    <textarea
                        className="textarea"
                        name="responsibilities"
                        placeholder="Job Responsibilities (Separate by comma)"
                    ></textarea>
                </fieldset>

                {/* HR Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <legend className="fieldset-legend">HR Info</legend>

                    <label className="label">HR Name</label>
                    <input
                        type="text"
                        name="hr_name"
                        className="input"
                        placeholder="HR Name"
                    />

                    <label className="label">HR Email</label>
                    <input
                        type="email"
                        name="hr_email"
                        className="input"
                        placeholder="HR Email"
                    />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Add Job"
                    />
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;
