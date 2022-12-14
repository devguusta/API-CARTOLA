import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { TeamsService } from './team.service';


@UseGuards(JwtGuard)
@Controller('teams')
export class teamsController {
    constructor(private teamsService: TeamsService){
        
    }

@Get('all')
signin(){
    return this.teamsService.findAllTeams();
}
}
