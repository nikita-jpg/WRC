import * as dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import passport from "passport";
import cors from "cors";

import { authRoute } from "./router/auth";

import bodyParser from "body-parser";
// import { User } from "./models/user.model";
import { authJwtMiddleware } from "./middleware/authJwtMiddleware";
// import { SinglePhase } from "./models/singlePhase.model";
import { dataRoute } from "./router/data";
import User from "./models/user.model";
import SinglePhase from "./models/singlePhase.model";
import ThreePhase from "./models/threePhase.model";
import { initBDSinglePhase } from "./init/initBDSinglePhase";
import { initBDThreePhase } from "./init/initBDThreePhase";
// import { ThreePhase } from "./models/threePhase.model";

// import * as models from "./models";
// import { Pribor } from "./models/pribor.model";
// import { priborRoute } from "./router/pribor";

// create application/json parser
const jsonParser = bodyParser.json();

const app: Express = express();
const port = process.env.PORT || 3000;
const BD_PATH = process.env.BD_PORT || "127.0.0.1";
// models: [__dirname + "/**/*.model.ts"],

const sequelize = new Sequelize({
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
sequelize.addModels([User, SinglePhase, ThreePhase]);

app.use(passport.initialize());
authJwtMiddleware(passport);
const passportMidlware = passport.authenticate("jwt", { session: false });

app.use(cors());
app.use("/auth", jsonParser, authRoute);
app.use("/data", [jsonParser, passportMidlware], dataRoute);
// app.use("/pribor", [jsonParser, passportMidlware], priborRoute);

app.get("/test", passportMidlware, (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const start = async () => {
  process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2");
  });

  try {
    await sequelize.authenticate();
    console.log("MySql authenticated successfully");

    //раскомментировать если нужно обновить таблицу в бд
    // await sequelize.sync({ force: true });

    //раскомментировать проиницализировать БД однофазная таблица
    // await initBDSinglePhase();

    //раскомментировать проиницализировать БД трёхфазная таблица
    // await initBDThreePhase();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};

start();
