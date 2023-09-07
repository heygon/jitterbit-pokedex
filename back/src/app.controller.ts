import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('lista/:load')
  async listPokemons(@Param('load') load): Promise<any> {
    return await this.appService.listPokemons(load);
  }

  @Get('pokemon/:name')
  detailPokemon(@Param('name') name): any {
    return this.appService.detailPokemon(name);
  }

  @Get('pokemon/search/:name')
  searchPokemon(@Param('name') name): any {
    return this.appService.searchPokemon(name);
  }
}
