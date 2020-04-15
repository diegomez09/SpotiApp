import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  //paises:any[] = [];
  constructor(//private htt:HttpClient
    private spotify:SpotifyService) { 
    this.spotify.getNewReleases();
    //console.log('constructor');
    //this.htt.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data:any) =>{
      //console.log(data);
      //this.paises = data;
    //});
  }

  ngOnInit(): void {
  }

}
