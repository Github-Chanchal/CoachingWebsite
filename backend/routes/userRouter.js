import express from "express";
import { registerUser, updateRole } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
// import { updateRole } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/",registerUser);
UserRouter.get("/",getUser);
UserRouter.put("/",updateRole)


export default UserRouter;