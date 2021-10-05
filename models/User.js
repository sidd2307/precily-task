import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});

const user = mongoose.model("user", UserSchema);

export default user;
