import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.Router.navigate(['home']);
  }

}
