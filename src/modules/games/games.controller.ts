import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GamesService } from './games.service';

@UseGuards(JwtGuard)
@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService){
        
    }

@Get('all')
signin(){
    return this.gamesService.findAll();
}

@Get('one')
signup(@Param() dto: number ){
   
   return  this.gamesService.findOne(dto);
}
}
