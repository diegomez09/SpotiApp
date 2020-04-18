import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http:HttpClient) {
    console.log('spotify servece listo');
   }

   getQuery(query:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAQ6-L8_Vh2WZARgCyFjc3OITGtcwV65GncmrGQR2BrV1_0fGW04UGXzfbplGW1K8TP0C-FoTV0wMS4PUk'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers});
   }

   getNewReleases(){     
    return this.getQuery('browse/new-releases')
    .pipe(map ( dataReceive =>{
       //console.log(dataReceive['albums'].items);
       console.log(dataReceive['albums'].items[0].artists[0].id);
       return dataReceive['albums'].items;
    }))
   }

   getArtistas(termino:string){
     console.log(termino);    
   return this.getQuery(`search?q=${ termino }&type=artist`)
   .pipe(map (dataRecive =>
    dataRecive['artists'].items   ))
   }

   getSingleArtist(artistaId:string){
    //console.log(artistaId);
    return this.getQuery(`artists/${artistaId}`)
    //.pipe(map (dataReceive =>
    //  dataReceive['artist'].items));
   }

   toptracks(artista:string){
    return this.getQuery(`artists/${artista}/top-tracks?country=mx`)
    .pipe(map (dataReceive =>
      dataReceive['tracks']));
   }
}
