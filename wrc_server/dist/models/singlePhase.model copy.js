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
exports.SinglePhase = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SinglePhase = class SinglePhase extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER, autoIncrement: true }),
    __metadata("design:type", Number)
], SinglePhase.prototype, "singlePhaseId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", String)
], SinglePhase.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TIME),
    __metadata("design:type", String)
], SinglePhase.prototype, "time", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "voltage", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "amperage", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "power", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "RPower", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "FPower", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "Ku", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "Ki", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], SinglePhase.prototype, "Kp", void 0);
SinglePhase = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], SinglePhase);
exports.SinglePhase = SinglePhase;
//# sourceMappingURL=singlePhase.model%20copy.js.map