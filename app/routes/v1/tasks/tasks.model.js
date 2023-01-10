import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: RESOURCE.USERS,
    required: true,
  },

  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.TASKS, schema);
