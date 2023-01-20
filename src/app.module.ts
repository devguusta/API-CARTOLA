import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { GamesModule } from './modules/games/games.module';
import { Round } from './entity/round.entity';
import { AdminModule } from './modules/admin/admin.module';
import { Team } from './entity/team.entity';
import { TeamsModule } from './modules/teams/teams.module';
import { Shield } from './entity/shield.entity';
import { NbaTeam } from './entity/nba_team.entity';
import { NbaModule } from './modules/nba/nba.module';
import { NbaPlayer } from './entity/nba_player.entity';
dotenv.config();
const config = process.env

var result = [   process.env.HOST,
  Number(process.env.PORT),
process.env.USERNAME,
  process.env.PASSWORD,
  process.env.DATABASE,]

  console.log(result);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host:process.env.HOST,
        port:Number(process.env.PORT),
        username:process.env.USERNAME,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
    entities: [
   
    Round, User, Team,Shield, NbaTeam,
    NbaPlayer,
  ],
  migrations: ['dist/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
      }),    
    }),
    AuthModule,
    GamesModule,
    AdminModule,
    TeamsModule,
    NbaModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
