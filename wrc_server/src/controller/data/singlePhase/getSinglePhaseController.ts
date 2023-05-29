import SinglePhase from "../../../models/singlePhase.model";

export const getSinglePhaseController = async (req, res) => {
  try {
    const data = await SinglePhase.findAll();

    return res.status(200).json(
      data.map(
        ({
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
        }) => ({
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
        })
      )
    );
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Get data error" });
  }
};
