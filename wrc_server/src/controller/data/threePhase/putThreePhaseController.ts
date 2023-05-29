import ThreePhase from "../../../models/threePhase.model";
import { toISODateString } from "../../../utils/toISODateString";
import { toNumber } from "../../../utils/toNumber";

export const putThreePhaseController = async (req, res) => {
  try {
    const {
      date,
      time,
      voltage1,
      amperage1,
      voltage2,
      amperage2,
      voltage3,
      amperage3,
    } = req.body;

    if (
      !date ||
      !time ||
      !voltage1 ||
      !amperage1 ||
      !voltage2 ||
      !amperage2 ||
      !voltage3 ||
      !amperage3
    ) {
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

    const dataNew = ThreePhase.build({
      date: toISODateString(date, "."),
      time,
      voltage1: toNumber(voltage1),
      amperage1: toNumber(amperage1),
      voltage2: toNumber(voltage2),
      amperage2: toNumber(amperage2),
      voltage3: toNumber(voltage3),
      amperage3: toNumber(amperage3),
    });
    await dataNew.save();

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Put data error" });
  }
};
