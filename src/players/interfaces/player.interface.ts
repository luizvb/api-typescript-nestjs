import { Document } from "mongoose";

export interface Player extends Document{
    readonly telefoneCelular: string;
    readonly email: string;
    nome: string;
    ranking: string;
    posicaoRanking: number;
    urlFotoPlayer: string;
}