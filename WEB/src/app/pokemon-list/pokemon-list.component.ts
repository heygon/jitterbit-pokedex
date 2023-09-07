import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  constructor( private service : PokemonService ) { }

  public pokemons = Array();
  listaInicial = 0
  search = ''


  ngOnInit(): void {
    this.carregarMais()
  }
  
  
  carregarMais(){
    //this.pokemons = []
    this.service.carregarPokemons(this.listaInicial).subscribe((data:any) => {
      data.results.map((e: any, i:number) => {
        this.service.detalhePokemon(e.name).subscribe((data:any) => {

          this.pokemons.push(
            {
              id   : i,
              nome : e.name,
              url  : e.url,
              type : data.types[0].type.name
            }
          )

        })
      })
    });
    
    setTimeout(() => {
      this.pokemons.sort()
      console.log(this.pokemons)
    }, 2000);

    this.listaInicial = this.listaInicial + 9

  }

  handleSearch(){
    
    this.service.buscarPokemons(this.search).subscribe((data:any) => {
      console.log(data)
      if(data.name == "Não encontrado"){
        this.pokemons = []
        this.pokemons.push(
          {
            id   : 0,
            nome : "Não encontrado",
            url  : '',
            type : ''
          }
        )
      }else{
        if(data.name == this.search){
          this.pokemons = []
          this.pokemons.push(
            {
              id   : 0,
              nome : data.name,
              url  : data.url,
              type : data.types[0].type.name
            }
          )
        }else{
          data.results.map((e: any, i:number) => {
            this.service.detalhePokemon(e.name).subscribe((data:any) => {

              this.pokemons.push(
                {
                  id   : i,
                  nome : e.name,
                  url  : e.url,
                  type : data.types[0].type.name
                }
              )

            })
          })
        }
      }
      
    });
  }


}

