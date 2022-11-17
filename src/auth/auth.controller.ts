import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { LoginDto } from './dtos/login.dto';
import { RecoveryPasswordDto } from './dtos/recovery.password.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){



    }

@Post('signin')
signin(@Body() dto: LoginDto){
    return this.authService.signin(dto);
}

@Post('signup')
signup(@Body() dto: AuthDto ){
   
   return  this.authService.signup(dto);
}

@Post('recovery')
recoveryPassword(@Body() dto: RecoveryPasswordDto) {

}

}


