import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [{ index: true, Component: Home }],
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
