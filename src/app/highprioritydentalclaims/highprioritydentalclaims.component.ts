import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';
@Component({
  selector: 'app-highprioritydentalclaims',
  templateUrl: './highprioritydentalclaims.component.html',
  styleUrls: ['./highprioritydentalclaims.component.css']
})
export class HighprioritydentalclaimsComponent implements OnInit {
  
  backendurl = "https://northstarai.herokuapp.com/getdata"
  numclaims = []
  constructor(private http: HttpClient) {


   }

  ngOnInit() {
    this.http.get(this.backendurl).subscribe((data) => {
        var j;
       
       
        for (j=0; j<(Math.floor(Number(data)/100)); j++) {
         this.numclaims.push(j)

        }
        return this.numclaims

    }
)

  }

  changecolour(x: HTMLElement) {
    x.style.backgroundColor = 'lightgray';
  }
  removecolour(x: HTMLElement) {
   
    x.style.backgroundColor = '#f2eded';
  }
}
