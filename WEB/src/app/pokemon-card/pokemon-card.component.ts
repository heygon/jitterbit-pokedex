import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor() { 

  }
  
  @Input()
  nome: string | undefined
  
  @Input()
  type: string | undefined
  
  @Input()
  numero!: number | 1;


  ngOnInit(): void {
  }


  pegarImagemPokemon(nome:any){
    //const numeroFormatado = (this.numero < 10) ? '00'+this.numero : (this.numero < 100) ? '0'+this.numero : this.numero
    //return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png` 
    if(nome == 'Não encontrado'){
      return '../../assets/img/image-not-found.png'
    }else{
      return `https://img.pokemondb.net/artwork/${nome}.jpg`
    }
  }

  getColor(type:any){
    let background = ''
    let primary = ''
    
    if(type == 'grass'){
      background = '#c4eab2'
      primary = '#87b772'
    }else if(type == 'bug'){
      background = '#c4eab2'
      primary = '#87b772'
    }else if(type == 'fire'){
      background = '#e3aba9'
      primary = '#c66b68'
    }else if(type == 'water'){
      background = '#9fd2e6'
      primary = '#5c9eb8'
    }else if(type == 'normal'){
      background = '#dadcd6'
      primary = '#949c85'
    }else if(type == 'flying'){
      background = '#7cb0c4'
      primary = '#52727f'
    }else{
      background = '#f0f0f0'
      primary = '#a4a4a4'
    }

    return {
      //'background-color':background,
      'background-color':'#fff',
      'border-bottom': 'solid 10px '+ primary,
      'border-top': 'solid 10px '+ primary
    }
  }
}
