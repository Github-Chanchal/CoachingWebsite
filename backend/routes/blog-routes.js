import express from "express";
const blogRouter = express.Router();
// import {getAllBlogs} from "../controllers/blog-controller.js";
import {addBlogs} from "../controllers/blog-controller.js";
import {updateBlogs} from "../controllers/blog-controller.js";
import {getById} from "../controllers/blog-controller.js";
import {deleteBLog} from "../controllers/blog-controller.js";
import {getAllBlogs} from "../controllers/blog-controller.js";

blogRouter.get("/getBlogs/:email",getAllBlogs);
blogRouter.post("/",addBlogs);
blogRouter.put("/update/:id",updateBlogs);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBLog);

export default blogRouter;