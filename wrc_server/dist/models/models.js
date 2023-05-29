"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const user_1 = require("./user");
const initModels = (sequelize) => ({
    User: (0, user_1.userModel)(sequelize),
});
exports.initModels = initModels;
//# sourceMappingURL=models.js.map