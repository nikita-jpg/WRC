import ThreePhase from "../models/threePhase.model";
import { toISODateString } from "../utils/toISODateString";
import { toNumber } from "../utils/toNumber";
import * as data from "./testDataThreePhase.json";

export const initBDThreePhase = async () => {
  console.log("initBDThreePhase");

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const normalData = data.default.map((row) => ({
    date: toISODateString(row.date, "."),
    time: row.time,
    voltage1: toNumber(row.voltage1),
    amperage1: toNumber(row.amperage1),
    voltage2: toNumber(row.voltage2),
    amperage2: toNumber(row.amperage2),
    voltage3: toNumber(row.voltage3),
    amperage3: toNumber(row.amperage3),
  }));

  for (const row of normalData) {
    console.log(row);
    const dataNew = ThreePhase.build(row);
    await dataNew.save();
  }
};
