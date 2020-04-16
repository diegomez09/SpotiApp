import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //arregloRecibe:any = {} 

  constructor(private http:HttpClient) {
    console.log('spotify servece listo');
   }

   getNewReleases(){
     const headers = new HttpHeaders({
       'Authorization':'Bearer BQDilHLd_vU73rokiGX_fGA8Stluca_5Uv2j2uvkx-xJAvjsX15pnuYTKEfv47PJNeV959ZEKRudmOJ4xxo'
     })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtistas(termino:string){
     console.log(termino);
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDilHLd_vU73rokiGX_fGA8Stluca_5Uv2j2uvkx-xJAvjsX15pnuYTKEfv47PJNeV959ZEKRudmOJ4xxo'
    })
   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
   }
}
