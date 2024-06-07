"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter_1 = require("./usersRouter");
const appointmentsRouter_1 = require("./appointmentsRouter");
const router = (0, express_1.Router)();
router.use("/users", usersRouter_1.userRouter);
router.use("/appointments", appointmentsRouter_1.appointmentsRouter);
//router.post("/users", createUser)
//router.get("/users", auth, getUsers) //cuando haga la peticon pasa primero por md
exports.default = router;
