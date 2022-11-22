import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AdminStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    config: ConfigService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
    console.log("ola")
  }

  async validate(payload: {
    sub: number;
    email: string;
  }) {
    const user =
      await this.userRepository.findOne({
        where: {
          id: payload.sub,
        }
      });
      if(!user.admin){
        return new UnauthorizedException('admin required');
      }
    
    delete user.password;
    return user;
  }
}