import express from "express";
import UserController from "../controllers/userController";

const userRoute = express.Router();

userRoute.get("/all",UserController.getAllUsers);
userRoute.post("/create",UserController.createUser);


export default userRoute;