import { Injectable } from '@nestjs/common';
import Axios from 'axios';
//import PokemonDto from './pokemons/dtos/pokemon.dto';

@Injectable()
export class AppService {
  pokeApi = 'https://pokeapi.co/api/v2';

  async listPokemons(load): Promise<any> {
    const { data } = await Axios.get(
      `${this.pokeApi}/pokemon?limit=9&offset=${load}`,
    );
    return data;
  }

  async detailPokemon(name): Promise<any> {
    const { data } = await Axios.get(`${this.pokeApi}/pokemon/${name}`);
    return data;
  }

  async searchPokemon(name): Promise<any> {
    let res = null;
    try {
      res = await Axios.get(`${this.pokeApi}/pokemon/${name}`);
      return res.data;
    } catch (err) {
      console.log('catch');
      return {
        name: 'Não encontrado',
      };
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
