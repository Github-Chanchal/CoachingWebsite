import express from "express";
import { registerUser, updateRole } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
import { getUserByEmail } from "../controllers/userController.js";
const UserRouter = express.Router();

UserRouter.post("/",registerUser);
UserRouter.get("/",getUser);
UserRouter.put("/",updateRole)
UserRouter.get("/:email",getUserByEmail)


export default UserRouter;