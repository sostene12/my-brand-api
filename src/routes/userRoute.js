import express from "express";
import UserController from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { registerSchema,loginSchema } from "../validation/userSchema";

const userRoute = express.Router();

userRoute.get("/all",UserController.getAllUsers);
userRoute.get("/:id",UserController.getSingleUser);
userRoute.post("/create",validate(registerSchema),UserController.createUser);
userRoute.post("/login",validate(loginSchema),UserController.login);
userRoute.put("/update/:id",UserController.updateUser);
userRoute.delete("/delete/:id",UserController.deleteUser);


export default userRoute;