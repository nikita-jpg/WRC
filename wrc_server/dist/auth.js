"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
// import Router from "express";
const express_1 = require("express");
const auth_1 = require("../controller/auth");
// import { authorization } from '../auth';
exports.auth = (0, express_1.Router)();
// router.post('/registration', registration);
exports.auth.get("/authorization", auth_1.authorization);
// export default router
//# sourceMappingURL=auth.js.map