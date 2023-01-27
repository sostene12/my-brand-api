import express from "express";
import UserController from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { registerSchema,loginSchema } from "../validation/userSchema";
import { verifyTokenAndRole } from "../middlewares/authenticate";

const userRoute = express.Router();

userRoute.get("/all",verifyTokenAndRole,UserController.getAllUsers);
userRoute.get("/:id",verifyTokenAndRole,UserController.getSingleUser);
userRoute.post("/create",validate(registerSchema),UserController.createUser);
userRoute.post("/login",validate(loginSchema),UserController.login);
userRoute.put("/update/:id",verifyTokenAndRole,UserController.updateUser);
userRoute.delete("/delete/:id",verifyTokenAndRole,UserController.deleteUser);


export default userRoute;