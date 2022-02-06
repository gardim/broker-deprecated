import typeorm from "typeorm";

const { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } = typeorm;

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column()
  humidity: number;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  timestamp: Date;
}
