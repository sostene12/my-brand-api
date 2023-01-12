import Blog from "../models/blog";
import cloudinary from "../helpers/cloudinary";

class BlogController{
    static async getAllBlogs(req, res) {
        try {
          const blogs = await Blog.find();
          res.status(200).json(blogs);
        } catch (error) {
          res.status(404).json(error.message);
        }
      }

    static async getSingleBlog(req,res){
        try {
            const blog = await Blog.findById(req.params.id);
            res.status(200).json(blog);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
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
            res.status(201).json(blog);
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    }

    static async updateBlog(req, res) {
        try {
          const blog = await Blog.findById(req.params.id);
          await cloudinary.uploader.destroy(blog.image);
          const result = await cloudinary.uploader.upload(req.file.path);
          const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title,
            description:req.body.description,
            image:result.secure_url,
            comments:req.body.comments
          }},{new:true});
          res.status(200).json({
            status:"success",
            data:updatedBlog
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    

    static async deleteBlog(req,res){
        try {
          await Blog.findByIdAndDelete(req.params.id);
          res.status(200).json({message:"the blog deleted"});  
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    }


}

export default BlogController;