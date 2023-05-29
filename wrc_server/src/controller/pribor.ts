// import { Pribor } from "../models/pribor.model";

// export const createPriborController = async (req, res) => {
//   try {
//     const priborNew = Pribor.build({
//       userId: req.user.userId,
//     });
//     await priborNew.save();

//     res.json({ priborId: priborNew.priborId });
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ message: "Create pribor error" });
//   }
// };

// export const getPriborsController = async (req, res) => {
//   try {
//     const userPribors = await Pribor.findAll({
//       where: { userId: req.user.userId },
//     });

//     res.json(
//       userPribors.map(({ priborId }) => ({
//         priborId,
//       }))
//     );
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ message: "Get pribor error" });
//   }
// };

// export const deletePriborsController = async (req, res) => {
//   try {
//     const { priborId } = req.body;

//     if (!priborId) {
//       return res.status(400).json({
//         message: `Parameters error , ${JSON.stringify({
//           priborId,
//         })}`,
//       });
//     }

//     await Pribor.destroy({ where: { priborId } });

//     res.sendStatus(200);
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ message: "Get pribor error" });
//   }
// };
