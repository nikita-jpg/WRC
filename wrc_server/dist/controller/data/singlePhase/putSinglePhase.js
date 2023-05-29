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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSinglePhase = void 0;
const putSinglePhase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, voltage, amperage, power, RPower, FPower, Ku, Ki, Kp } = req.body;
        if (!date ||
            !time ||
            !voltage ||
            !amperage ||
            !power ||
            !RPower ||
            !FPower ||
            !Ku ||
            !Ki ||
            !Kp) {
            return res.status(400).json({
                message: `Parameters error , ${JSON.stringify({
                    date,
                    time,
                    voltage,
                    amperage,
                })}`,
            });
        }
        const isPriborExist = yield Pribor.findByPk(priborId);
        if (!isPriborExist) {
            return res.status(400).json({
                message: `Pribor is not exist with priborId = ${priborId}`,
            });
        }
        const dataNew = SinglePhase.build({
            date,
            time,
            priborId,
            voltage: Number(voltage),
            amperage: Number(amperage),
            userId: req.user.userId,
        });
        yield dataNew.save();
        res.sendStatus(200);
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Put data error" });
    }
});
exports.putSinglePhase = putSinglePhase;
//# sourceMappingURL=putSinglePhase.js.map