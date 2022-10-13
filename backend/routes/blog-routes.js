import express from "express";
const blogRouter = express.Router();
// import {getAllBlogs} from "../controllers/blog-controller.js";
import {addBlogs} from "../controllers/blog-controller.js";
import {updateBlogsById} from "../controllers/blog-controller.js";
import {getById} from "../controllers/blog-controller.js";
import {deleteBLogg} from "../controllers/blog-controller.js";
import {getAllBlogs} from "../controllers/blog-controller.js";

blogRouter.get("/getBlogs",getAllBlogs);
blogRouter.post("/",addBlogs);
blogRouter.put("/",updateBlogsById);
blogRouter.get("/:id",getById);
blogRouter.delete("/deleteBlog/:id",deleteBLogg);

export default blogRouter;