import User from "../models/User";
import bcrypt from "bcrypt";
import { sign } from "../helpers/jwt";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({status:"success",data:users});
    } catch (error) {
      res.status(400).json({status:"error",error:error.message});
    }
  }

  static async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if(!user){
        return res.status(404).json({status:"fail",message:"The user not found"});
      }
      const {password,...others} = user._doc;
      res.status(200).json({status:"success",data:others});
    } catch (error) {
      res.status(401).json({status:"error", error: error.message });
    }
  }

  static async createUser(req, res) {
    try {
      const user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password,salt)
      await user.save();
      res.status(201).json({status:"success",data:user});
    } catch (error) {
      res.status(500).json({status:"success", error: error.message });
    }
  }

  static async login(req,res){
    try {
      const user = await User.findOne({email:req.body.email});
      if(!user) return res.status(401).json({status:"fail",error:"Invalid credentials" });
      const match = await bcrypt.compare(req.body.password,user.password);
      if(!match){
        res.status(401).json({status:"error",error:"Invalid password" })
        return;
      }
      const accessToken = sign({id:user._id,role:user.role,name:user.username})
      res.status(200).json({status:"success",data:user,token:accessToken});

    } catch (error) {
      res.status(500).json({status:"error", error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const user = req.body;
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password,salt);
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:user},{new:true});
      res.status(200).json({status:"success",data:updatedUser});
    } catch (error) {
      res.status(500).json({status:"error", error: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if(!user){
        return res.status(404).json({status:"fail",message:"The user not found"});
      }
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({status:"success",data:null,message:'User deleted!'});
    } catch (error) {
      res.status(500).json({status:"error", error: error.message });
    }
  }
}

export default UserController;
