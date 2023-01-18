
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';
import { AuthService} from './auth.service';
import { JwtStrategy } from './strategy';
import { REQUEST } from '@nestjs/core';
describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
  providers:[
    {
      provide: AuthService,
      useValue: {},
    },
    
  
   ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });


  it('Should return a string', async() => {
    service.signin = jest.fn().mockResolvedValue({});

    await expect(controller.signin({
      "email": "test@gmail.com",
      "password": "teste",
    })).resolves.not.toThrow();
    expect(service.signin).toHaveBeenCalledWith({
      "email": "test@gmail.com",
      "password": "teste",
    })
  });
  it("SHould be  able to create user account", async() => {
    service.signup = jest.fn().mockResolvedValue({});

    await (expect(controller.signup({
      "email": "test@gmail.com",
      "password": "teste",
      "name": "Tester"
    }))).resolves.not.toThrow();
    expect(service.signup).toHaveBeenCalledWith({
      "email": "test@gmail.com",
      "password": "teste",
      "name": "Tester"
    })
  })
});
