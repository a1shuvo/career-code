import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign out");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const links = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            {/* For job applicant. check role as well. */}
            {user && (
                <>
                    <li>
                        <NavLink to={"/my-applications"}>
                            My Applications
                        </NavLink>
                    </li>
                </>
            )}

            {/* For Recruiter. Check role as well. */}
            {user && (
                <>
                    <li>
                        <NavLink to={"/add-job"}>Add Job</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/my-posted-jobs"}>My Posted Jobs</NavLink>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-xl">Career Code</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <button onClick={handleSignOut} className="btn">
                        SignOut
                    </button>
                ) : (
                    <>
                        <Link to={"/auth/register"} className="btn">
                            Register
                        </Link>
                        <Link to={"/auth/signin"} className="btn">
                            SignIn
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
