import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../entity/user.entity';
import { Round } from '../entity/round.entity';
import { Team } from '../entity/team.entity';
import { Shield } from '../entity/shield.entity';
import { NbaTeam } from '../entity/nba_team.entity';
import { NbaPlayer } from '../entity/nba_player.entity';
import { NbaAllStarVoting } from '../entity/nba_allstar_voting.entity';
dotenv.config();
const config = process.env



export default new DataSource(
  
  {
    type: 'postgres',
    host:process.env.HOST,
    port:Number(process.env.PORT),
    username:process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
  entities: [User, Round, Team,
    Shield, NbaTeam, NbaPlayer,NbaAllStarVoting
  ],
  migrations: ["./migration/*.ts"],
  migrationsTableName: 'typeorm_migrations',
  // synchronize: true,
}

);