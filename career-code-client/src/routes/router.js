import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "/jobs/:id",
                Component: JobDetails,
                hydrateFallbackElement: "Loading...",
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/jobs/${params.id}`),
            },
        ],
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            { path: "signin", Component: SignIn },
            { path: "register", Component: Register },
        ],
    },
]);

export default router;
