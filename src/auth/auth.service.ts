import { Injectable, Inject, BadRequestException, ForbiddenException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from "@nestjs/config";
import { RecoveryPasswordDto } from './dtos/recovery.password.dto';
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
      console.log(error);
      
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
         email: dto.email, name: dto.name, password: hash, admin: false,
      });
      delete user.password;
  
    return user;
    } catch (error) {
      console.log(error);
      
    throw error;
      
    }
  }

  async recoveryPassword(params:RecoveryPasswordDto) {
    try {
      const userExist = await this.userRepository.findOne(
        {
          where: {
            email: params.email,
          }
        }
      );
      if(!userExist){
        return new BadRequestException({
          message: "User dont exists",
          statusCode: 404,
      });
    
      }
      const isMatch = await bcrypt.compare(params.oldPassword, userExist.password);
      if(!isMatch){
        return new ForbiddenException(
          {
            message: "The passwords dont match",
          statusCode: 400,
          }
        );
      }
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(params.newPassword, saltOrRounds);
      userExist.password = hash;
      await this.userRepository.save(userExist);
      return HttpStatus.CREATED;


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