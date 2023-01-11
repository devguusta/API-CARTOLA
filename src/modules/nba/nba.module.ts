import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "dotenv";
import { NbaTeam } from "src/entity/nba_team.entity";
import { NbaController } from "./nba.controller";
import { NbaService } from "./nba.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([NbaTeam]),
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
    controllers: [
        NbaController
    ],
    providers:[NbaService]
})
export class NbaModule{}