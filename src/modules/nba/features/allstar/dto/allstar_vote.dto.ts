import { User } from "src/entity/user.entity";

export class AllStarVoteParams{
    user: number;
    playerId: number;
    position: string;
}

export class AllStarVoteControllerParams{
    playerId: number;
    position: string;
}