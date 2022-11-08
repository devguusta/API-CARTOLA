import { ClosedRound } from "./closedRound.entity";

export class Games{
  
    rodata_atual: number;
    status_mercado: number;
    esquema_default_id: number;
    max_ligas_free: number;
    max_ligas_pro: number;
    max_ligas_matamata_free: number;
    max_ligas_patrocinadas_pro_numero: number;
    game_over: boolean;
    temorada: number;
    reativar: boolean;
    exibir_sorteio_pro: boolean;
    fechamento: ClosedRound;
    times_escalados: number;
    novo_mes_ranking: boolean;
    mercado_pos_rodada;
  
  }