import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

@Table({ timestamps: false })
export default class SinglePhase extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true })
  singlePhaseId: number;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  date: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  time: string;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  voltage: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  amperage: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  power: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  RPower: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  FPower: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  Ku: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  Ki: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  Kp: number;

  // @ForeignKey(() => Pribor)
  // @Column
  // priborId: number;

  // @BelongsTo(() => Pribor)
  // pribor: Pribor;
}
