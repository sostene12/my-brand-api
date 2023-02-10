import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnect from "./database/db";
import userRoute from "./routes/userRoute";
import contactRoute from "./routes/contactRoute";
import blogRoute from "./routes/blogRoute";
import swaggerDocs from "./api-docs/swagger"

dotenv.config();
const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());

const port = process.env.PORT ? process.env.PORT : 3000;

dbConnect()
app.listen(port,() => {
    console.log("App is listening on port " +port);
});

swaggerDocs(app);
app.use("/api/user",userRoute);
app.use("/api/contact",contactRoute);
app.use("/api/blog",blogRoute);


export default app;