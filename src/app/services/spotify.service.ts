import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('spotify servece listo');
   }

   getNewReleases(){
     const headers = new HttpHeaders({
       'Authorization':'Bearer BQAL09y1-S4FO7XWf-QZUT778j1FpvbByjjwer8GWK0rZwt0Nk26m6Kgi-3kUcv4DHZbHcxGJM7SNne2umU'
     })
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers })
    .subscribe(info =>{
      console.log(info);
    })
   }
}
