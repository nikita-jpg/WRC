"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationController = exports.authorizationController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = require("process");
const user_model_1 = __importDefault(require("../models/user.model"));
const generateAccessToken = (id, email) => {
    const payload = {
        userId: id,
        email: email,
    };
    return jsonwebtoken_1.default.sign(payload, process_1.env.GENERATE_ACCESS_TOKEN_WORD, {
        expiresIn: process_1.env.GENERATE_ACCESS_TOKEN_IN,
    });
};
const authorizationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.debug(req.body);
        const { email, password } = req.body;
        const user = yield user_model_1.default.findOne({ where: { email: email } });
        if (!user) {
            return res.status(403).json({ message: "Email error" });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password_hash);
        if (!validPassword) {
            return res.status(403).json({ message: "Password error" });
        }
        const token = generateAccessToken(user.userId, user.email);
        return res.json({ token });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Login error" });
    }
});
exports.authorizationController = authorizationController;
const registrationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userNew = user_model_1.default.build({
            email,
            password_hash: bcryptjs_1.default.hashSync(password, 10),
        });
        const user = yield userNew.save();
        const token = generateAccessToken(user.userId, user.email);
        return res.json({ token });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Registration error" });
    }
});
exports.registrationController = registrationController;
//# sourceMappingURL=auth.js.map