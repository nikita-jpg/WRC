import SinglePhase from "../models/singlePhase.model";
import { toISODateString } from "../utils/toISODateString";
import { toNumber } from "../utils/toNumber";
import * as data from "./testDataSinglePhase.json";

export const initBDSinglePhase = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const normalData = data.default.map((row) => ({
    date: toISODateString(row.date, "."),
    time: row.time,
    voltage: toNumber(row.voltage),
    amperage: toNumber(row.amperage),
    power: toNumber(row.power),
    RPower: toNumber(row.RPower),
    FPower: toNumber(row.FPower),
    Ku: toNumber(row.Ku),
    Ki: toNumber(row.Ki),
    Kp: toNumber(row.Kp),
  }));

  for (const row of normalData) {
    const dataNew = SinglePhase.build(row);
    await dataNew.save();
  }
};
