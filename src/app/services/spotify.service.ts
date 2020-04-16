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
      'Authorization':'Bearer BQCTdRlJcaWigLAE7WD1ItIRFrPRz40jSCBa6vBypwM7KCRzPdxYG4jKBOpgL5UXZC2glQNYaWMjP-MRyH8'
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
}
