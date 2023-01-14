export class NbaPlayerParams {
    constructor(team, season){
        this.team = team;
        this.season = season;
    }
    team: number | undefined;
    season: number | undefined;
}