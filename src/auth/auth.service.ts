import { Injectable, Inject, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from "@nestjs/config";
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

 async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async signin(dto: LoginDto) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: dto.email,
        }
      });
      if(!user){
        return new ForbiddenException(
          'Credentials invalid'
        );
      }
      const isMatch = await bcrypt.compare(dto.password, user.password);
      if(!isMatch){
        return new ForbiddenException(
          'Credentials invalid'
        );
      }
     
      return this.signToken(
        {
        email: user.email,
        admin: user.admin,
        password: user.password,
        name: user.name,
        id: user.id
        }

      );

      
    } catch (error) {
      
    }
    
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


  async signToken(dto: User): Promise<{access_token: string}>{
    const payload = {
        sub: dto.id,
        email: dto.email,
        admin: dto.admin,
        name: dto.name,

    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload,{
        expiresIn: '15m',
        secret: secret,
    });
    return {
        access_token: token,
    }
  }

}