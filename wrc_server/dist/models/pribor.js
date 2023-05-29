// import {
//   BelongsTo,
//   Column,
//   DataType,
//   ForeignKey,
//   HasMany,
//   Model,
//   Table,
// } from "sequelize-typescript";
// import { SinglePhase } from "./singlePhase.model";
// import { User } from "./user.model";
// @Table({ timestamps: false })
// export class Pribor extends Model {
//   @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true })
//   priborId: number;
//   @ForeignKey(() => User)
//   @Column
//   userId: number;
//   @BelongsTo(() => User)
//   user: User;
//   @HasMany(() => SinglePhase, { onDelete: "CASCADE" })
//   singlePhases: SinglePhase[];
// }
//# sourceMappingURL=pribor.js.map