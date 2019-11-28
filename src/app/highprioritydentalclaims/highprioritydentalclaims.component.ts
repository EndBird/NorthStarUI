import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highprioritydentalclaims',
  templateUrl: './highprioritydentalclaims.component.html',
  styleUrls: ['./highprioritydentalclaims.component.css']
})
export class HighprioritydentalclaimsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changecolour(x: HTMLElement) {
    x.style.backgroundColor = 'lightgray';
  }
  removecolour(x: HTMLElement) {
   
    x.style.backgroundColor = '#f2eded';
  }
}
