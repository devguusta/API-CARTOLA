import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Shield } from "src/entity/shield.entity";
import { Team } from "src/entity/team.entity";
import { Repository } from "typeorm";
import { TeamDto } from "./dto/team.dto";

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
            //TODO: ALTERAR AQUI PARA
            const {data} = await this.httpService.get<Map<number, TeamDto>>(this.config.get("CARTOLA_API") + "/clubes").toPromise();
           data["237"]
           var result = Array.from(data.values());
        
            var teams = await this.teamRepository.find()
           // console.log(data);
            console.log(data)
            // cenário dois
            if(teams.length === 0) {
              const  teamsPromise =  result.map(team => {
                   return this.teamRepository.save(team);
                }
                 );
                 const teams = Promise.all(teamsPromise);
                //  CENÁRIO 2
                 this.teamRepository.save(result);


             

               
            }
            return [];
        }
}