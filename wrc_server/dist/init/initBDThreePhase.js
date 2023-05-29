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
exports.initBDThreePhase = void 0;
const threePhase_model_1 = __importDefault(require("../models/threePhase.model"));
const toISODateString_1 = require("../utils/toISODateString");
const toNumber_1 = require("../utils/toNumber");
const data = __importStar(require("./testDataThreePhase.json"));
const initBDThreePhase = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("initBDThreePhase");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const normalData = data.default.map((row) => ({
        date: (0, toISODateString_1.toISODateString)(row.date, "."),
        time: row.time,
        voltage1: (0, toNumber_1.toNumber)(row.voltage1),
        amperage1: (0, toNumber_1.toNumber)(row.amperage1),
        voltage2: (0, toNumber_1.toNumber)(row.voltage2),
        amperage2: (0, toNumber_1.toNumber)(row.amperage2),
        voltage3: (0, toNumber_1.toNumber)(row.voltage3),
        amperage3: (0, toNumber_1.toNumber)(row.amperage3),
    }));
    for (const row of normalData) {
        console.log(row);
        const dataNew = threePhase_model_1.default.build(row);
        yield dataNew.save();
    }
});
exports.initBDThreePhase = initBDThreePhase;
//# sourceMappingURL=initBDThreePhase.js.map