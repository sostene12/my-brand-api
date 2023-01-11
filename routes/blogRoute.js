import express from "express";

import BlogController from "../controllers/blogController";
import upload from "../helpers/multer";

const blogRoute = express.Router();

blogRoute.post("/create",upload.single("image"),BlogController.createBlog);
blogRoute.get("/:id",BlogController.getSingleBlog);
blogRoute.delete("/delete/:id",BlogController.deleteBlog);

export default blogRoute;