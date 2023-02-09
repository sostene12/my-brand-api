import express from "express";

import BlogController from "../controllers/blogController";
import {upload} from "../helpers/multer";
import { verifyToken,verifyTokenAndRole } from "../middlewares/authenticate";

const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),verifyTokenAndRole,BlogController.createBlog);
blogRoute.get("/all",BlogController.getAllBlogs);
blogRoute.get("/:id",BlogController.getSingleBlog);
blogRoute.delete("/delete/:id",verifyTokenAndRole,BlogController.deleteBlog);
blogRoute.put("/update/:id",upload.single('image'),verifyTokenAndRole,BlogController.updateBlog);
blogRoute.put("/comment/:id",verifyToken,BlogController.comment);
blogRoute.put("/like/:id",verifyToken,BlogController.like);

export default blogRoute;