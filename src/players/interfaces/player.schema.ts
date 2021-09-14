import * as mongoose from 'mongoose'

export const PlayerSchema = new mongoose.Schema({
    telefoneCelular: { type: String, unique:true },
    email: { type: String, unique:true },
    nome: String,
    ranking: String,
    posicaoRanking: Number,
    urlFotoPlayer: String
}, { 
    timestamps:true,
    collection:'Players'
})