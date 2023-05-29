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
exports.getSinglePhaseController = void 0;
const singlePhase_model_1 = __importDefault(require("../../../models/singlePhase.model"));
const getSinglePhaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield singlePhase_model_1.default.findAll();
        return res.status(200).json(data.map(({ date, time, voltage, amperage, power, RPower, FPower, Ku, Ki, Kp, }) => ({
            date,
            time,
            voltage,
            amperage,
            power,
            RPower,
            FPower,
            Ku,
            Ki,
            Kp,
        })));
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Get data error" });
    }
});
exports.getSinglePhaseController = getSinglePhaseController;
//# sourceMappingURL=getSinglePhaseController.js.map