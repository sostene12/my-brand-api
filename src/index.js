import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

import dbConnect from "./database/db";
import userRoute from "./routes/userRoute";
import contactRoute from "./routes/contactRoute";
import blogRoute from "./routes/blogRoute";
import swaggerDocs from "./api-docs/swagger"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));


app.use(passport.initialize());
app.use(passport.session());

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