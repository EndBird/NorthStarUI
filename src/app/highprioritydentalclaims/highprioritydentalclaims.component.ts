import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highprioritydentalclaims',
  templateUrl: './highprioritydentalclaims.component.html',
  styleUrls: ['./highprioritydentalclaims.component.css']
})
export class HighprioritydentalclaimsComponent implements OnInit {

  backendurl = "http://northstarai.herokuapp.com/getdata"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.backendurl).subscribe((data) => {
        //DO STUFF HERE
         console.log(data)
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
