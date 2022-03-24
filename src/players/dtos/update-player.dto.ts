import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly nome: string;
}
