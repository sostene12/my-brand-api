import express from "express";
import UserController from "../controllers/userController";

const userRoute = express.Router();

userRoute.get("/all",UserController.getAllUsers);
userRoute.get("/:id",UserController.getSingleUser);
userRoute.post("/create",UserController.createUser);
userRoute.put("/update/:id",UserController.updateUser);
userRoute.delete("/delete/:id",UserController.deleteUser);


export default userRoute;