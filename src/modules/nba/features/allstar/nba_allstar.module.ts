import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NbaAllStarVoting } from "src/entity/nba_allstar_voting.entity";
import { NbaPlayer } from "src/entity/nba_player.entity";
import { NbaTeam } from "src/entity/nba_team.entity";
import { NbaAllStarCOntroller } from "./allstart.controller";
import { NbaAllStarService } from "./allstart.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([NbaPlayer, NbaTeam, NbaAllStarVoting]),
        HttpModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
            baseURL: configService.get('NBA_API'),
            headers: { 
                'X-RapidAPI-Key': configService.get('NBA_API_KEY'),
                'X-RapidAPI-Host': configService.get('NBA_API_HOST'),          
            },
            timeout: 7000,
            maxRedirects: 5
            }),
            inject: [ConfigService]
        })
    ],
     controllers: [NbaAllStarCOntroller],
     providers: [NbaAllStarService],
})
export class NbaAllStarModule{
    
}