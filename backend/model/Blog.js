import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String
  }
});

export default mongoose.model("Blog", blogSchema);
