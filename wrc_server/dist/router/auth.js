"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const auth_1 = require("../controller/auth");
exports.authRoute = (0, express_1.Router)();
exports.authRoute.post("/registration", auth_1.registrationController);
exports.authRoute.post("/authorization", auth_1.authorizationController);
//# sourceMappingURL=auth.js.map