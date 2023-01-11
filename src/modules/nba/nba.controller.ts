import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { NbaService } from "./nba.service";

@UseGuards(JwtGuard)
@Controller('nba')
export class NbaController{
    constructor(private  nbaService: NbaService){}

    @Get('teams')
    getAll(){
        
        return this.nbaService.findAll();
    }

    @Get('teams/:id')
    getTeam(){
        
    }
}