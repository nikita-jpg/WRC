import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

@Table({ timestamps: false })
export default class ThreePhase extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true })
  threePhaseId: number;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  date: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  time: string;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  voltage1: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  amperage1: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  voltage2: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  amperage2: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  voltage3: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  amperage3: number;
}
