import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import { sampleRoute, usersRoute, authRoute, tasksRoute } from "./app/routes/v1/index.js";

const app = express();

// middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/api/v1/sample", sampleRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tasks", tasksRoute);

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
