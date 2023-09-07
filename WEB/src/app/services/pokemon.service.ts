import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {

  api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  carregarPokemons(load:number): Observable<any> {
    return this.http.get(`${this.api}/lista/${load}`);
  }

  detalhePokemon(name:string): Observable<any> {
    return this.http.get(this.api+'/pokemon/'+name);
  }

  buscarPokemons(name:string): Observable<any> {
    return this.http.get(this.api+'/pokemon/search/'+name);
  }

}
