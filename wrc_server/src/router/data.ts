import { Router } from "express";
import { getSinglePhaseController } from "../controller/data/singlePhase/getSinglePhaseController";
import { putSinglePhaseController } from "../controller/data/singlePhase/putSinglePhaseController";
import { putThreePhaseController } from "../controller/data/threePhase/putThreePhaseController";
import { getThreePhaseController } from "../controller/data/threePhase/getThreePhaseController";

export const dataRoute = Router();

dataRoute.get("/getSinglePhase", getSinglePhaseController);
dataRoute.put("/putSinglePhase", putSinglePhaseController);

dataRoute.get("/getThreePhase", getThreePhaseController);
dataRoute.put("/putThreePhase", putThreePhaseController);
