import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private service : PokemonService) { }

  details: any
  

  ngOnInit(): void {
    let name:any = window.location.href.split('/'); // Collect id from url
    name = name[name.length -1];
    this.service.detalhePokemon(name).subscribe((data : any) => {
      
      console.log(data)
      
      this.details = data
      
    });
  }

  getColor(type:any){
    let primary = ''
    
    if(type == 'grass'){
      primary = '#87b772'
    }else if(type == 'poison'){
      primary = '#b550e3'
    }else if(type == 'bug'){
      primary = '#87b772'
    }else if(type == 'fire'){
      primary = '#c66b68'
    }else if(type == 'water'){
      primary = '#5c9eb8'
    }else if(type == 'normal'){
      primary = '#949c85'
    }else if(type == 'flying'){
      primary = '#52727f'
    }else{
      primary = '#a4a4a4'
    }

    return primary;
  }
  
  getBackground(type:any){

    console.log(type)
    let url = ''
    
    if(type == 'grass'){
      url = '../../assets/img/Bug-Types.jpg'
    }else if(type == 'poison'){
      url = '../../assets/img/Poison-Types.png'
    }else if(type == 'bug'){
      url = '../../assets/img/Bug-Types.jpg'
    }else if(type == 'fire'){
      url = '../../assets/img/Fire-Type.jpg'
    }else if(type == 'water'){
      url = '../../assets/img/Dragon-Types-1.jpg'
    }else if(type == 'normal'){
      url = '#949c85'
    }else if(type == 'flying'){
      url = '#52727f'
    }else{
      url = '#a4a4a4'
    }

    return url;
  }



}


