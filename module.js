import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
});
const UserModel = mongoose.model("users", userSchema);

export default UserModel;
