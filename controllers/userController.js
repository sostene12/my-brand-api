import User from "../models/User";
import CryptoJS from "crypto-js";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({status:"success",data:users});
    } catch (error) {
      res.status(500).json({status:"error",error:error.message});
    }
  }

  static async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const {password,...others} = user._doc;
      res.status(200).json({status:"success",data:others});
    } catch (error) {
      res.status(500).json({ status:"error", error: error.message });
    }
  }

  static async createUser(req, res) {
    try {
      const {username,password,email} = req.body;
      const hashedPassword = CryptoJS.AES.encrypt(password,process.env.SECRET_KEY).toString();
      const user = new User({username:username,password:hashedPassword,email:email});
      await user.save();
      res.status(201).json({status:"success",data:user});
    } catch (error) {
      res.status(500).json({status:"fail", error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
      res.status(200).json({status:"success",data:updatedUser});
    } catch (error) {
      res.status(500).json({status:"fail", error: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({status:"success",data:null});
    } catch (error) {
      res.status(500).json({status:"fail", error: error.message });
    }
  }
}

export default UserController;
