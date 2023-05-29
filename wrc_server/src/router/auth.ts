import { Router } from "express";
import {
  authorizationController,
  registrationController,
} from "../controller/auth";

export const authRoute = Router();

authRoute.post("/registration", registrationController);
authRoute.post("/authorization", authorizationController);
