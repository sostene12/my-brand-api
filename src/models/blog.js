import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  comments: [
    {
      name: String,
      comment:String,
      date:String
    },
  ],
  likes:{type:Number,default:0}
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
