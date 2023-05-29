import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
// import { Pribor } from "./pribor.model";

@Table({ timestamps: false })
export default class User extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true })
  userId: number;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  password_hash: string;

  // @HasMany(() => Pribor)
  // pribors: Pribor[];
}
