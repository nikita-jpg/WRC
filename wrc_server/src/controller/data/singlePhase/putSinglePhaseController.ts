import SinglePhase from "../../../models/singlePhase.model";
import { toISODateString } from "../../../utils/toISODateString";

export const putSinglePhaseController = async (req, res) => {
  try {
    const { date, time, voltage, amperage, power, RPower, FPower, Ku, Ki, Kp } =
      req.body;

    if (
      !date ||
      !time ||
      !voltage ||
      !amperage ||
      !power ||
      !RPower ||
      !FPower ||
      !Ku ||
      !Ki ||
      !Kp
    ) {
      return res.status(400).json({
        message: `Parameters error , ${JSON.stringify({
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
        })}`,
      });
    }

    console.info("DATE:", date);

    const dataNew = SinglePhase.build({
      date: toISODateString(date, "."),
      time,
      voltage: Number(String(voltage).replace(",", ".")),
      amperage: Number(String(amperage).replace(",", ".")),
      power: Number(String(power).replace(",", ".")),
      RPower: Number(String(RPower).replace(",", ".")),
      FPower: Number(String(FPower).replace(",", ".")),
      Ku: Number(String(Ku).replace(",", ".")),
      Ki: Number(String(Ki).replace(",", ".")),
      Kp: Number(String(Kp).replace(",", ".")),
    });
    await dataNew.save();

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Put data error" });
  }
};
