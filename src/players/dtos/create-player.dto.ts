import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreatePlayerDto {

    @IsNotEmpty()
    readonly telefoneCelular: string;
    
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    readonly nome: string;
}