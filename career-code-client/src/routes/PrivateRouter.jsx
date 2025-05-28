import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = ({ children }) => {
    const { user } = use(AuthContext);
    if (!user) {
        <Navigate to={"/signin"}></Navigate>;
    }
    return children;
};

export default PrivateRouter;
