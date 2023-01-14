export class NbaPlayerDto{
    id: number;
    firstname: string;
    lastname: string;
    birth: Birth;
    nba: Nba;
    height: Height;
    weight: Weight;
    college: string;
    affiliation: string;
    leagues: Leagues;

} 


export  class Nba{
    start: number;
    pro: number;
}

export class Birth{
    date: string;
    country:string;
}

export  class Height{
    feets: string;
    inches: string;
    meters: string;
}

export class Weight{
    pounds: string;
    kilograms: string;

}
export class Leagues{
    standard: Standard;
}


export class Standard{
    jersey: number;
    active: boolean;
    pos: string;
}