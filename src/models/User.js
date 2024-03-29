import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  role:{
    type:String,
    default:"user"
  }
});

const User = mongoose.model('User',userSchema);

export default User;
