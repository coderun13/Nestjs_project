//importing modules
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';
import { Repository } from 'typeorm';
const AuthService = require('./user.entity');


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: object): Promise<User| undefined> {
    return this.userRepository.findOne(id);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: object, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}


 export default UserService;