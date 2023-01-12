import Blog from "../models/blog";
import cloudinary from "../helpers/cloudinary";

class BlogController{
    static async createBlog(req,res){
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const blog = new Blog({
                title:req.body.title,
                description:req.body.description,
                image:result.secure_url,
                comments:req.body.comments
            });
            await blog.save();
            res.status(201).json({status:"success",data:blog});
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}

export default BlogController;