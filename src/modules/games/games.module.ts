import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Round } from 'src/entity/round.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';



@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Round]),
    
   
  ],
  



  controllers: [GamesController],
  providers:[
    GamesService
  ],
})
export class GamesModule {}
