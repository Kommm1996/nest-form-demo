import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tel: string;

  @Column({ nullable: true })
  com?: string;

  @Column({ nullable: true })
  message?: string;

  @CreateDateColumn()
  createdAt: Date;
}
