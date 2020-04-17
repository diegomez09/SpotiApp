import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app.routing';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() arreglo: any[] = [];  

//Este componente solo recibe el arreglo ya procesado de la api para poder mostrarlo
  constructor(private router:Router    
    ) {                     
  }

  ngOnInit(): void {
    console.log(this.arreglo);
  }

  verArtista(item:any){
    //console.log(this.arreglo[5]);
    console.log(item);    
    this.router.navigate([`artist/${item}`]);    
  }

}
