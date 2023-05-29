"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pribor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const singlePhase_model_1 = require("./singlePhase.model");
const user_model_1 = require("./user.model");
let Pribor = class Pribor extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true }),
    __metadata("design:type", Number)
], Pribor.prototype, "priborId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Pribor.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Pribor.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => singlePhase_model_1.SinglePhase),
    __metadata("design:type", Array)
], Pribor.prototype, "singlePhases", void 0);
Pribor = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Pribor);
exports.Pribor = Pribor;
//# sourceMappingURL=pribor.mpdel.js.map