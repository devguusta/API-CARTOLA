import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Shield } from "src/entity/shield.entity";
import { Team } from "src/entity/team.entity";
import { TeamsService } from "./team.service";
import { teamsController } from "./teams.controller";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Team, Shield])
    ],
    controllers:[
        teamsController,
    ],
    providers: [
        TeamsService
    ],    
})

export class TeamsModule{
    
}