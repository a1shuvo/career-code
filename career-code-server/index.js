const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ef6kr6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const jobsCollection = client.db("careerCode").collection("jobs");
        const applicationsCollection = client
            .db("careerCode")
            .collection("applications");

        // jobs api
        app.get("/jobs", async (req, res) => {
            const result = await jobsCollection.find().toArray();
            res.send(result);
        });

        app.get("/jobs/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await jobsCollection.findOne(query);
            res.send(result);
        });

        // job applications related api
        app.get("/applications", async (req, res) => {
            const email = req.query.email;
            const query = {
                applicant: email,
            };
            const result = await applicationsCollection.find(query).toArray();

            // Bad way to aggregate data
            for (const application of result) {
                const jobId = application.jobId;
                const jobQuery = { _id: new ObjectId(jobId) };
                const job = await jobsCollection.findOne(jobQuery);
                application.company = job.company;
                application.title = job.title;
                application.company_logo = job.company_logo;
            }
            res.send(result);
        });

        app.post("/applications", async (req, res) => {
            const application = req.body;
            console.log(application);
            const result = await applicationsCollection.insertOne(application);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Carrer Code is Cooking...");
});

app.listen(port, () => {
    console.log(`Career Code Server is listening on port ${port}`);
});
