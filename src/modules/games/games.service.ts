import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { isNumber } from "class-validator";
import { stringify } from "querystring";
import { Games } from "./dtos";






@Injectable()
export class GamesService {
    constructor(private readonly httpService: HttpService) {}

    async findAll(): Promise<Games> {
  var {data} = await this.httpService.get<Games>("https://api.cartola.globo.com/mercado/status").toPromise();
      console.log(data.fechamento);
 
  return data;
    }

    async findOne(id: number): Promise<any> {
        console.log(id)
    }
}