import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>;
    }

    if (!user) {
        return (
            <Navigate to="/auth/signin" state={location.pathname}></Navigate>
        );
    }

    return children;
};

export default PrivateRouter;
