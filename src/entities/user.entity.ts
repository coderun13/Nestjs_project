//define TypeORM entity for the user model

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: object;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string; // For simplicity, store passwords in plaintext
}

export default User;