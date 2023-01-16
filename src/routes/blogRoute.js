import express from "express";

import BlogController from "../controllers/blogController";
import upload from "../helpers/multer";
import { verifyToken } from "../middlewares/authenticate";

const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),verifyToken,BlogController.createBlog);
blogRoute.get("/all",BlogController.getAllBlogs);
blogRoute.get("/:id",BlogController.getSingleBlog);
blogRoute.delete("/delete/:id",BlogController.deleteBlog);
blogRoute.put("/update/:id",upload.single('image'),BlogController.updateBlog);
blogRoute.put("/comment/:id",BlogController.comment);

export default blogRoute;