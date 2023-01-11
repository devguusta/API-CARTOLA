import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
    host: configService.get("HOST"),
    port: configService.get("PORT"),
    username: configService.get("HOST"),
    password: configService.get("PASSWORD"),
    database: configService.get("DATABASE"),
    entities: [
   
    Round, User, Team,Shield, NbaTeam
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
