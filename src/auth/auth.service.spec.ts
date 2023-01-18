
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';
import { AuthService} from './auth.service';
import { JwtStrategy } from './strategy';
import { REQUEST } from '@nestjs/core';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { ConfigService } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
describe('AuthSErvice', () => {

  let service: AuthService;
  let userRepository: Repository<User>;
  let config: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
  providers:[
   
    AuthService,
    {
        provide: getRepositoryToken(User),
        useValue: {}
    },
    {
      provide: ConfigService,
      useValue: {},
    },
    {
        provide: JwtService,
        useValue:{}
    }
    
    
    
  
   ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    config = module.get<ConfigService>(ConfigService);
  })
  it("SHould be create a new user account", async () => {
    service.signin =  jest.fn().mockResolvedValue({
    "email": "test@gmail.com",
      "password": "teste",
    });
    const result = await service.signin({
        "email": "test@gmail.com",
      "password": "teste",
    });
    expect(result).toHaveProperty('email', "test@gmail.com");


  })
}
);
