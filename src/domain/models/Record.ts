import typeorm from "typeorm";

const { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } = typeorm;

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column()
  unit: string;
  @Column("float")
  parsed: number;
  @Column()
  raw: number;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  timestamp: Date;
}
