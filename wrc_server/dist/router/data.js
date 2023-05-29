"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRoute = void 0;
const express_1 = require("express");
const getSinglePhaseController_1 = require("../controller/data/singlePhase/getSinglePhaseController");
const putSinglePhaseController_1 = require("../controller/data/singlePhase/putSinglePhaseController");
const putThreePhaseController_1 = require("../controller/data/threePhase/putThreePhaseController");
const getThreePhaseController_1 = require("../controller/data/threePhase/getThreePhaseController");
exports.dataRoute = (0, express_1.Router)();
exports.dataRoute.get("/getSinglePhase", getSinglePhaseController_1.getSinglePhaseController);
exports.dataRoute.put("/putSinglePhase", putSinglePhaseController_1.putSinglePhaseController);
exports.dataRoute.get("/getThreePhase", getThreePhaseController_1.getThreePhaseController);
exports.dataRoute.put("/putThreePhase", putThreePhaseController_1.putThreePhaseController);
//# sourceMappingURL=data.js.map