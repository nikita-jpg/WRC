"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const sequelize_typescript_1 = require("sequelize-typescript");
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./router/auth");
const body_parser_1 = __importDefault(require("body-parser"));
// import { User } from "./models/user.model";
const authJwtMiddleware_1 = require("./middleware/authJwtMiddleware");
// import { SinglePhase } from "./models/singlePhase.model";
const data_1 = require("./router/data");
const user_model_1 = __importDefault(require("./models/user.model"));
const singlePhase_model_1 = __importDefault(require("./models/singlePhase.model"));
const threePhase_model_1 = __importDefault(require("./models/threePhase.model"));
// import { ThreePhase } from "./models/threePhase.model";
// import * as models from "./models";
// import { Pribor } from "./models/pribor.model";
// import { priborRoute } from "./router/pribor";
// create application/json parser
const jsonParser = body_parser_1.default.json();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const BD_PATH = process.env.BD_PORT || "127.0.0.1";
// models: [__dirname + "/**/*.model.ts"],
const sequelize = new sequelize_typescript_1.Sequelize({
    database: "WRC_DB",
    dialect: "mysql",
    username: "front",
    password: "zxzxzx551",
    storage: ":memory:",
    host: BD_PATH,
    models: [__dirname + "/**/*.model.ts"],
    // models: Object.values(models),
    // models: Object.values(models),
});
// sequelize.addModels([User, Pribor, SinglePhase]);
sequelize.addModels([user_model_1.default, singlePhase_model_1.default, threePhase_model_1.default]);
app.use(passport_1.default.initialize());
(0, authJwtMiddleware_1.authJwtMiddleware)(passport_1.default);
const passportMidlware = passport_1.default.authenticate("jwt", { session: false });
app.use((0, cors_1.default)());
app.use("/auth", jsonParser, auth_1.authRoute);
app.use("/data", [jsonParser, passportMidlware], data_1.dataRoute);
// app.use("/pribor", [jsonParser, passportMidlware], priborRoute);
app.get("/test", passportMidlware, (req, res) => {
    res.send("Express + TypeScript Server");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    process.once("SIGUSR2", function () {
        process.kill(process.pid, "SIGUSR2");
    });
    try {
        yield sequelize.authenticate();
        console.log("MySql authenticated successfully");
        //раскомментировать если нужно обновить таблицу в бд
        // await sequelize.sync({ force: true });
        //раскомментировать проиницализировать БД однофазная таблица
        // await initBDSinglePhase();
        //раскомментировать проиницализировать БД трёхфазная таблица
        // await initBDThreePhase();
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
});
start();
//# sourceMappingURL=index.js.map