import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog',
    },
    name:{type:String},
    Comment:{type:String},
    date:{type:String}
});

const Comment = mongoose.model('Comment',commentSchema);

export default Comment;