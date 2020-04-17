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
      'Authorization':'Bearer BQBxZgW9xuLaepXmp70XqNc-Wj-rqG20irtLkjri-EJilBq9kCZ8pCkQ3kstXgfJ6OXP67bQDvF2uC94dK0'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers});
   }

   getNewReleases(){     
    return this.getQuery('browse/new-releases')
    .pipe(map ( dataReceive =>{
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
}
