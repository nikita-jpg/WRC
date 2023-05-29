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
exports.putThreePhaseController = void 0;
const threePhase_model_1 = __importDefault(require("../../../models/threePhase.model"));
const toISODateString_1 = require("../../../utils/toISODateString");
const toNumber_1 = require("../../../utils/toNumber");
const putThreePhaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, voltage1, amperage1, voltage2, amperage2, voltage3, amperage3, } = req.body;
        if (!date ||
            !time ||
            !voltage1 ||
            !amperage1 ||
            !voltage2 ||
            !amperage2 ||
            !voltage3 ||
            !amperage3) {
            return res.status(400).json({
                message: `Parameters error , ${JSON.stringify({
                    date,
                    time,
                    voltage1,
                    amperage1,
                    voltage2,
                    amperage2,
                    voltage3,
                    amperage3,
                })}`,
            });
        }
        const dataNew = threePhase_model_1.default.build({
            date: (0, toISODateString_1.toISODateString)(date, "."),
            time,
            voltage1: (0, toNumber_1.toNumber)(voltage1),
            amperage1: (0, toNumber_1.toNumber)(amperage1),
            voltage2: (0, toNumber_1.toNumber)(voltage2),
            amperage2: (0, toNumber_1.toNumber)(amperage2),
            voltage3: (0, toNumber_1.toNumber)(voltage3),
            amperage3: (0, toNumber_1.toNumber)(amperage3),
        });
        yield dataNew.save();
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Put data error" });
    }
});
exports.putThreePhaseController = putThreePhaseController;
//# sourceMappingURL=putThreePhaseController.js.map