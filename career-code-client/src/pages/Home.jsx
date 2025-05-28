import { Suspense } from "react";
import HeroBanner from "../components/HeroBanner";
import HotJobs from "./HotJobs";

const Home = () => {
    const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
        res.json()
    );
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Suspense fallback={"Loading Hot Jobs..."}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;
