import express from "express";
import UserController from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { registerSchema,loginSchema } from "../validation/userSchema";
import { verifyToken } from "../middlewares/authenticate";

const userRoute = express.Router();

userRoute.get("/all",verifyToken,UserController.getAllUsers);
userRoute.get("/:id",verifyToken,UserController.getSingleUser);
userRoute.post("/create",validate(registerSchema),UserController.createUser);
userRoute.post("/login",validate(loginSchema),UserController.login);
userRoute.put("/update/:id",verifyToken,UserController.updateUser);
userRoute.delete("/delete/:id",verifyToken,UserController.deleteUser);


export default userRoute;