"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get("/", userController_1.getUsers);
userRouter.get("/:id", userController_1.getUserById); //param es un parametro dentro de la url
userRouter.post("/register", userController_1.registerController);
userRouter.post("/login", userController_1.loginController);
