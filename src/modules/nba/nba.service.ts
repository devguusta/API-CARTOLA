import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NbaTeam } from "src/entity/nba_team.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config"
import { NbaTeamDto } from "./dto/nba_team.dto";
@Injectable()
export class NbaService{
    constructor(
    private readonly httpService: HttpService,
    private config: ConfigService,
     @InjectRepository(NbaTeam)
     private nbaTeamRepository: Repository<NbaTeam>   
        ){}


async findAll(): Promise<NbaTeam[]> {


    try {
        var {data} = await this.httpService.get("/teams").toPromise();
        const nbaTeams = await this.nbaTeamRepository.find();
        var result: NbaTeamDto[] = data.response;
        if(nbaTeams.length === 0){
            console.log("primeira vez")
            const  teamsPromise =  result.map(team => {
                return this.nbaTeamRepository.save({
                    allStar: team.allStar,
                    city: team.city,
                    code:team.code,
                    teamId: team.id,
                    logo: team.logo !== undefined ? team.logo : '',
                    name: team.name,
                    nbaFranchise: team.nbaFranchise,
                    nickname: team.nickname,
    
                });
             }
              );
              const teams = Promise.all(teamsPromise);
              return teams;
        } else {
            console.log("aqui");
            return nbaTeams;
        } 
    } catch (error) {
        console.log(error);
    }

    
   
     
}

}