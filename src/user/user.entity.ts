import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TestUser')
export class TestUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;
}
