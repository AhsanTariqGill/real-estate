import express from "express"
import { test } from "../controller/user.controler.js";

const userRoute = express.Router();

userRoute.get('/test', test)

export default userRoute;