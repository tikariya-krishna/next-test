import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    blogImg: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref:'User' , required: true },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);