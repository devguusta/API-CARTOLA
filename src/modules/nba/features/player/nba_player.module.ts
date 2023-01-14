import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NbaPlayer } from "src/entity/nba_player.entity";
import { NbaTeam } from "src/entity/nba_team.entity";
import { NbaPlayerController } from "./nba_player.controller";
import { NbaPlayerService } from "./nba_player.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([NbaPlayer, NbaTeam]),
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
        controllers: [NbaPlayerController],
        providers: [NbaPlayerService],
})

export class NbaPlayerModule{}