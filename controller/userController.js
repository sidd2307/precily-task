import User from "../models/User.js";

// get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// create new user
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// edit user data
export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// edit user
export const editUser = async (req, res) => {
  const user = req.body;

  const editUser = new User(user);

  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.json(editUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json("User deleted successfully!");
  } catch (error) {
    res.json({ message: error.message });
  }
};
