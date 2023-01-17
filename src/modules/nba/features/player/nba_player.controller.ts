import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { NbaPlayerParams } from "./dto/nba_player_params.dto";
import { NbaPlayerService } from "./nba_player.service";

@UseGuards(JwtGuard)
@Controller('nba/players')
export class NbaPlayerController{
    constructor(private playerServive: NbaPlayerService){}


    @Get('all/team')
    getByTeam(@Query('team') team: number, @Query('season') season: number){
        console.log(team);
        return this.playerServive.findByTeam(new NbaPlayerParams(team, season));
    }

    @Get('all')
    getAll(){
       
        return this.playerServive.findAllPlayers();
    }


}