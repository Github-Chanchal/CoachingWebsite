import express from "express";
import { registerUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/",registerUser);


export default UserRouter;