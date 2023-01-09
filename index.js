import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnect from "./database/db";
import userRoute from "./routes/userRoute";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT ? process.env.PORT : 3000;

dbConnect()
app.listen(port,() => {
    console.log("App is listening on port " +port);
});

app.use("/api/user",userRoute);