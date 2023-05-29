"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const userModel = (sequelize) => sequelize.define("User", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
    },
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.TEXT,
}, { timestamps: false, tableName: "User" });
exports.userModel = userModel;
//# sourceMappingURL=user.js.map