import axios from "axios";

export const applicationsPromise = (email) => {
    return axios
        .get(`http://localhost:3000/applications?email=${email}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
};
