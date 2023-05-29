import ThreePhase from "../../../models/threePhase.model";

export const getThreePhaseController = async (req, res) => {
  try {
    // console.info("getThreePhaseController");

    const data = await ThreePhase.findAll();

    // console.log(data);

    return res.status(200).json(
      data.map(
        ({
          date,
          time,
          voltage1,
          amperage1,
          voltage2,
          amperage2,
          voltage3,
          amperage3,
        }) => ({
          date,
          time,
          voltage1,
          amperage1,
          voltage2,
          amperage2,
          voltage3,
          amperage3,
        })
      )
    );
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Get data error" });
  }
};
