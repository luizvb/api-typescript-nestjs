import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly country: string;
}
