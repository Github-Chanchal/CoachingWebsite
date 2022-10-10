import express from "express";

import { uploadSingleFileAndSendUrl } from "../controllers/upload.js";
import upload from "../Middleware/multerMiddleware.js";

const routes = express.Router();

routes.route('/').post(upload, uploadSingleFileAndSendUrl);

export default routes;
