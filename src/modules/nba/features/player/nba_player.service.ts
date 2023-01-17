import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { NbaPlayer } from "src/entity/nba_player.entity";
import { NbaTeam } from "src/entity/nba_team.entity";
import { Repository } from "typeorm";
import { NbaPlayerDto } from "./dto/nba_player.dto";
import { NbaPlayerParams } from "./dto/nba_player_params.dto";


@Injectable()
export class NbaPlayerService {
    constructor(
        private readonly httpService: HttpService,
        private config: ConfigService,
        @InjectRepository(NbaPlayer)
        private nbaPlayerRepository: Repository<NbaPlayer>,
        @InjectRepository(NbaTeam)
        private nbaTeamRepository: Repository<NbaTeam>,
    ){}


 async findByTeam(queryParams:NbaPlayerParams): Promise<NbaPlayer[]> {
    try {
        var {data} = await this.httpService.get("/players", {
            params: {
                "team": queryParams.team,
                "season": queryParams.season,
            },
        }).toPromise();
        const players = await this.nbaPlayerRepository.find();
        var result: NbaPlayerDto[] = data.response;
        if(players.length === 0){
            console.log("first time");
            const nbaTeam = await this.nbaTeamRepository.findOne({
                where: {
                    teamId: queryParams.team,
                }
            });
            console.log(queryParams);
            const playersPromise = result.map(player => {
                return this.nbaPlayerRepository.save({
                    idPlayer: player.id,
                    name: player.firstname + " " + player.lastname,
                    college: player.college|| undefined,
                    affiliation: player.affiliation || undefined,
                    weight: player.weight.kilograms || undefined,
                    height: player.height.meters || undefined,
                    birth: new Date(player.birth.date) || undefined,
                    country: player.birth.country || undefined,
                    active: player.leagues.standard.active || false,
                    jersey: player.leagues.standard.jersey || undefined,
                    position: player.leagues.standard.pos || undefined,
                    start:player.nba.start || undefined,
                    team: nbaTeam || undefined    
                });
            });
            const playersFinally = Promise.all(playersPromise);
            return playersFinally;
        } else{
            console.log("aqui")
            return players;
        }
       

    } catch (error) {
        console.log(error);
    }
 }
 async findAllPlayers(): Promise<NbaPlayer[]>{
    try {
        const nbaTeam = await this.nbaTeamRepository.find({
            where: {
               nbaFranchise: true,
            }
        });
        const nbaPlayers = await this.nbaPlayerRepository.find(
          
        );
        let newNbaPlayers
       
        if(nbaTeam.length > 0){
            
                for( const team of nbaTeam){
                    if(team.teamId > 11){
                        var {data} = await this.httpService.get("/players", {
                            params: {
                                "season": 2022,
                                "team": team.teamId,
                            }
                        }).toPromise();
                        var result: NbaPlayerDto[] = data.response;
                     
       var promise =  await Promise.all(result.map(e => {
        const oldPlayer =   this.nbaPlayerRepository.findOne({
            where: {
                idPlayer: e.id,
            }
        }).then((player) => {
            if(player === undefined){
                console.log("aqui");
                return this.nbaPlayerRepository.save({
                    idPlayer: e.id,
                    active: e.leagues.standard.active || false,
                    affiliation: e.affiliation || undefined,
                    birth: new Date(e.birth.date)  || undefined,
                    college: e.college || undefined,
                    country: e.birth.country || undefined,
                    height: e.height.meters || undefined,
                    jersey: e.leagues.standard.jersey || undefined,
                    name: e.firstname + "" + e.lastname,
                    position: e.leagues.standard.pos || undefined,
                    start: e.nba.start || undefined,
                    team: team,
                    weight: e.weight.kilograms,
                  }, );
            } else {
                console.log("já existe");
            }
            newNbaPlayers =  Promise.all(promise)
        });    
          
        }));
                    }
                    
                
            } 
            return newNbaPlayers;
           
        } else {
            console.log("deu merda");
            return [];
        }
        
    } catch (error) {
        
    }
 }
}

