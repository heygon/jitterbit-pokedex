import { ApiProperty } from '@nestjs/swagger';

export default class PokemonDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  types: any;

  @ApiProperty()
  stats: any;

  @ApiProperty()
  powers: any;
}
