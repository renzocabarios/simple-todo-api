import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  tasks: {
    type: [],
    default: [],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.USERS, schema);
