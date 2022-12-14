import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Shield } from "src/entity/shield.entity";
import { Team } from "src/entity/team.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamsService{
    constructor(private readonly httpService: HttpService,
        private config: ConfigService,
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
        @InjectRepository(Shield)
        private shieldRepository: Repository<Shield>,
        
        ){}

        async findAllTeams(): Promise<Team[]> {
            const {data} = await this.httpService.get<Team[]>(this.config.get("CARTOLA_API") + "/clubes").toPromise();
            console.log(data);
            return [];
        }
}