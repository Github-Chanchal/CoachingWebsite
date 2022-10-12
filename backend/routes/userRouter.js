import express from "express";
import { registerUser } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/",registerUser);
UserRouter.get("/",getUser);


export default UserRouter;