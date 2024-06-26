// Path: backend/Routes/userRoute.js

import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  dashboard,
  changeUserData,
} from "../Controllers/userController.js";
import authMiddleware from "../Middlewares/AuthMid.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/refresh-token", authMiddleware, refreshToken);
userRouter.post("/dashboard", authMiddleware, dashboard);
userRouter.post("/change", authMiddleware, changeUserData);

export default userRouter;
