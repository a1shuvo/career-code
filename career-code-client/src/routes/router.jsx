import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import AddJob from "../pages/AddJob/AddJob";
import ApplyJob from "../pages/ApplyJob";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import PrivateRouter from "./PrivateRouter";

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
            {
                path: "/apply-job/:id",
                element: (
                    <PrivateRouter>
                        <ApplyJob></ApplyJob>
                    </PrivateRouter>
                ),
            },
            {
                path: "/my-applications",
                element: (
                    <PrivateRouter>
                        <MyApplications></MyApplications>
                    </PrivateRouter>
                ),
            },
            {
                path: "/add-job",
                element: (
                    <PrivateRouter>
                        <AddJob></AddJob>
                    </PrivateRouter>
                ),
            },
            {
                path: "my-posted-jobs",
                element: (
                    <PrivateRouter>
                        <MyPostedJobs></MyPostedJobs>
                    </PrivateRouter>
                ),
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
