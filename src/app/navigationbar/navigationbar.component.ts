import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  changecolour(x: HTMLElement) {
     if (x.style.backgroundColor == 'darkgray') {
      return; 
    }
    x.style.backgroundColor = 'lightgray';
  }
  
  removecolour(x: HTMLElement) {
    if (x.style.backgroundColor == 'darkgray') {
      return; 
    }
    x.style.backgroundColor = 'transparent';
  }
 
  clickColours(x: HTMLElement) {
    var allelements = document.getElementsByTagName("mat-toolbar-row");
    var i;
    for (i = 0; i < allelements.length; i++) {
      var element: HTMLElement = allelements[i] as HTMLElement;
      element.style.backgroundColor = "transparent";
    }
    
    x.style.backgroundColor = "darkgray";
    

  }
  
}
