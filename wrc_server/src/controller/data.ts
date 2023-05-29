// // import { Pribor } from "../models/pribor.model";
// import { SinglePhase } from "../models/singlePhase.model";

// export const putDataController = async (req, res) => {
//   try {
//     const { date, time, voltage, amperage, priborId } = req.body;

//     if (!date || !time || !voltage || !amperage || !priborId) {
//       return res.status(400).json({
//         message: `Parameters error , ${JSON.stringify({
//           date,
//           time,
//           voltage,
//           amperage,
//           priborId,
//         })}`,
//       });
//     }

//     const isPriborExist = await Pribor.findByPk(priborId);
//     if (!isPriborExist) {
//       return res.status(400).json({
//         message: `Pribor is not exist with priborId = ${priborId}`,
//       });
//     }

//     const dataNew = SinglePhase.build({
//       date,
//       time,
//       priborId,
//       voltage: Number(voltage),
//       amperage: Number(amperage),
//       userId: req.user.userId,
//     });
//     await dataNew.save();

//     res.sendStatus(200);
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ message: "Put data error" });
//   }
// };

// // export const getDataController = async (req, res) => {
// //   try {
// //     const priborId = req.query.priborId;

// //     console.log(req.query.priborId);

// //     if (!priborId) {
// //       return res.status(400).json({
// //         message: `Parameters error , ${JSON.stringify({
// //           priborId,
// //         })}`,
// //       });
// //     }

// //     const userPribor = await Pribor.findOne({
// //       where: { userId: req.user.userId, priborId },
// //       include: [SinglePhase],
// //     });

// //     if (!userPribor) {
// //       return res.status(400).json({
// //         message: `This user have not pribor with priborId = ${priborId}`,
// //       });
// //     }

// //     return res.json(
// //       userPribor.singlePhases.map(({ date, time, voltage, amperage }) => ({
// //         date,
// //         time,
// //         voltage,
// //         amperage,
// //       }))
// //     );
// //   } catch (e) {
// //     console.log(e);
// //     res.status(400).json({ message: "Get data error" });
// //   }
// // };
