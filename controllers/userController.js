import User from "../models/User";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }

  static async createUser(req, res) {
    try {
      const user = new User({
        username: "patrick",
        password: "12345",
        email: "pati@gmail.com",
      });
      await user.save();
      res.status(201).json(user);
      console.log("user created");
    } catch (error) {
      res.status(401).json(error.message);
    }
  }

  static async deleteUser() {}
}

export default UserController;
