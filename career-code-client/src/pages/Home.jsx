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
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;
