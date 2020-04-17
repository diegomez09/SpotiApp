import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  bandera:boolean;

  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.bandera=true;
    //console.log(termino);    
    if(!termino){
      termino = ' ';
    }    
    this.spotify.getArtistas(termino)
    .subscribe((data:any) =>{            
      //console.log(data);
      this.artistas = data;
      this.bandera=false;
    })
  }

}
