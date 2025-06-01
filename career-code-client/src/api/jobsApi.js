export const jobsCreatedByPromise = async (email, accessToken) => {
    const res = await fetch(`http://localhost:3000/jobs?email=${email}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return await res.json();
};
