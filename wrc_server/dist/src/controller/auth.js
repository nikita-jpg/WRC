"use strict";
// const generateAccessToken = (id, email) => {
//     const payload = {
//         userId: id,
//         email: email
//     }
//     return jwt.sign(payload, 'Hello', {expiresIn: "1h"})
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const authorization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    return res.json(true);
});
exports.authorization = authorization;
// class authController {
//     async registration(req, res) {
//         // try {
//         //     const {username, email, password} = req.body;
//         //     const candidate = await Users.findOne({email})
//         //     if (candidate) {
//         //         return res.json({message: 'User is email', code: 1})
//         //     }
//         //     const hashPassword = bcrypt.hashSync(password, 10);
//         //     const user = new Users({username, email, password: hashPassword})
//         //     await user.save();
//         //     return res.json(true)
//         // } catch (e) {
//         //     console.log(e)
//         //     res.status(400).json({message: 'Registration error'})
//         // }
//     }
//     async authorization(req, res) {
//         return res.json(true)
//     }
// }
// module.exports = router
//# sourceMappingURL=auth.js.map