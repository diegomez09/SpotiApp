import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/app.routing';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() arreglo: any[] = [];
  
  item:string;

//Este componente solo recibe el arreglo ya procesado de la api para poder mostrarlo
  constructor(private router:Router, private url:ActivatedRoute) {                     
    this.url.params.subscribe(params =>{
      console.log(params);
    })
  }

  ngOnInit(): void {
    //console.log(this.arreglo);
  }

  verArtista(item:any){
    console.log(item);
    if(item.popularity){
      console.log('Id artista de search');
      this.router.navigate([`artist/${item.id}`]);    
    }else{
      console.log('cards home');
      this.router.navigate([`artist/${item.artists[0].id}`]);    
    }
    //console.log(this.arreglo[5]);
    //    
   // }
    //console.log(item);    
    //
  }

}
