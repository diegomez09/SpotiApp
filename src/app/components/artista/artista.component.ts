import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  arregloArtista:any = {}; 
  id:string;
  bandera:boolean;

  constructor(private router:ActivatedRoute, private servicio:SpotifyService) {
    this.bandera=true;
    this.router.params.subscribe(params =>{
      //console.log(params);
      this.getArtista(params['id']);
    });        
   }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.servicio.getSingleArtist(id)
    .subscribe(artista =>{
      this.bandera=true;
      console.log(artista);
      this.arregloArtista = artista;
      this.bandera=false;
    });
  }
}
