import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { isNumber } from "class-validator";
import { stringify } from "querystring";
import { Round } from "src/entity/round.entity";
import { Repository } from "typeorm";
import { Games } from "./dtos";






@Injectable()
export class GamesService {
    constructor(private readonly httpService: HttpService,  private roundRepository: Repository<Round>) {}

    async findAll(): Promise<Games> {
  var {data} = await this.httpService.get<Games>("https://api.cartola.globo.com/mercado/status").toPromise();
      console.log(data.fechamento);
 
  return data;
    }

    async findOne(id: number): Promise<any> {
        console.log(id)
    }
}