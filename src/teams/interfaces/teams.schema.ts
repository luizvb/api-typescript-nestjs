import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Teams')
export class TeamSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  country: string;
}
