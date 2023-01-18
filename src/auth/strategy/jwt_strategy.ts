import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { User } from '../../entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class JwtStrategy extends PassportStrategy(
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
      console.log(user);
    delete user.password;
    return user;
  }
}