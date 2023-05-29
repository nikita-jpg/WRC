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
exports.getDataController = void 0;
const singlePhase_model_1 = require("../../models/singlePhase.model");
const getDataController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   const priborId = req.query.priborId;
        //   console.log(req.query.priborId);
        //   if (!priborId) {
        //     return res.status(400).json({
        //       message: `Parameters error , ${JSON.stringify({
        //         priborId,
        //       })}`,
        //     });
        //   }
        //   const userPribor = await Pribor.findOne({
        //     where: { userId: req.user.userId, priborId },
        //     include: [SinglePhase],
        //   });
        //   if (!userPribor) {
        //     return res.status(400).json({
        //       message: `This user have not pribor with priborId = ${priborId}`,
        //     });
        //   }
        const data = singlePhase_model_1.SinglePhase.findAll();
        return res.json(userPribor.singlePhases.map(({ date, time, voltage, amperage }) => ({
            date,
            time,
            voltage,
            amperage,
        })));
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: "Get data error" });
    }
});
exports.getDataController = getDataController;
//# sourceMappingURL=getOnePhase.js.map