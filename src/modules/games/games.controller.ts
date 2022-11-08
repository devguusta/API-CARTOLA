import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';


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
