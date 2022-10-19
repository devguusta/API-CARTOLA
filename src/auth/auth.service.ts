import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

 async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async signup(dto: AuthDto){
    try {
      const oldUser = await this.userRepository.findOne(
        {
          where: {
            email: dto.email,
          }
        }
      )
      console.log(oldUser);
      if(oldUser){
        console.log("ola")
          return new BadRequestException({
              message: "User already exists",
              statusCode: 400,
          })
      }
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(dto.password, saltOrRounds);
      const user = await this.userRepository.save({
         email: dto.email, name: dto.name, password: hash, admin: 0,
      });
      delete user.password;
  
    return user;
    } catch (error) {
      console.log(error);
      
    throw error;
      
    }
  }
}