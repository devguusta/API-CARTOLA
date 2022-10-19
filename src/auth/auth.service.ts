import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
   
    private userRepository: Repository<User>,
  ) {}

 async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}