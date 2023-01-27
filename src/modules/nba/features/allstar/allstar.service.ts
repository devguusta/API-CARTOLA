import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { NbaAllStarVoting } from "src/entity/nba_allstar_voting.entity";
import { NbaPlayer } from "src/entity/nba_player.entity";
import { Repository } from "typeorm";
import { AllStarVoteParams } from "./dto/allstar_vote.dto";


@Injectable()
export class NbaAllStarService{
    constructor(
        private config: ConfigService,
        @InjectRepository(NbaPlayer)
        private nbaPlayerRepository: Repository<NbaPlayer>,
        @InjectRepository(NbaAllStarVoting)
        private nbaAllStarVoting: Repository<NbaAllStarVoting>
    ){}


    async setVote(queryParams: AllStarVoteParams) {
        try {
            const data = await this.nbaAllStarVoting.findAndCountBy({
                user: queryParams.user,
                
            },);
            if(data[1] === 5){
                return new BadRequestException({
                    message: "You can vote only five times",
                    statusCode: 400,
                })
            }
            const oldVote = await this.nbaAllStarVoting.findOne({
                where: {idPlayer: queryParams.playerId, user: queryParams.user},
            })
            if(oldVote){
                return new BadRequestException({
                    message: "User has voted in this player",
                    statusCode: 400,
                });
            }
            // const nbaVotes: NbaAllStarVoting[] = data[0];
            // console.log(data[0]);:
            // nbaVotes.map((v) => {
            //     if(v.idPlayer === queryParams.playerId && v.user.id == queryParams.user.id){
            //         return new BadRequestException({
            //             message: "User has voted in this player",
            //             statusCode: 400,
            //         })
            //     }
            // });
            const allStarVote  = await this.nbaAllStarVoting.save({
                idPlayer: queryParams.playerId,
                
                position: queryParams.position,
                user: queryParams.user,
            
            
            });
            return allStarVote;
            
        } catch (error) {
            console.log(error);
            return {
                "statusCode": 500,
                "message": "Internal server error"
              }
            
        }

    }


}