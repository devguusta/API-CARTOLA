import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { NbaAllStarService } from "./allstar.service";
import { AllStarVoteControllerParams, AllStarVoteParams } from "./dto/allstar_vote.dto";

@UseGuards(JwtGuard)
@Controller('nba/allstar')
export class NbaAllStarController{
    constructor(private nbaAllStarService: NbaAllStarService){}

 @Post('vote')
 setVote(@Req() req){
    console.log(req.user);
    return this.nbaAllStarService.setVote({
        playerId: req.body.playerId, position: req.body.position, user: req.user.id,
    });
 }



}