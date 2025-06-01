import axios from "axios";

export const applicationsPromise = async (email, accessToken) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/applications?email=${email}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        return console.log(error);
    }
};
