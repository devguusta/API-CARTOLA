import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { isNumber } from "class-validator";
import { stringify } from "querystring";
import { Round } from "src/entity/round.entity";
import { Repository } from "typeorm";
import { Games } from "./dtos";






@Injectable()
export class GamesService {
    constructor(private readonly httpService: HttpService,  
        @InjectRepository(Round)
        private roundRepository: Repository<Round>) {}

    async findAll(): Promise<Games> {
  var {data} = await this.httpService.get<Games>("https://api.cartola.globo.com/mercado/status").toPromise();
      console.log(data.fechamento);
      var game =  await this.roundRepository.findOne({
        where: {
            currentRound: data.rodada_atual,
        }
      });
      if(!game) {
        console.log(data.rodada_atual);
        await this.roundRepository.save({
            currentRound: data.rodada_atual,
            scheduledTeams: data.times_escalados,
            closed: new Date(data.fechamento.timestamp),
        });
        };
  return data;
    }

    async findOne(id: number): Promise<any> {
        console.log(id)
    }
}