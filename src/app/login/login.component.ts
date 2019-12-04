import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  LogIn(username: HTMLInputElement, password: HTMLInputElement) {
     var backendurl = "http://localhost:5000/login"
     this.http.post(backendurl, {"username":username, "password": password}).subscribe((data) => {
        var status = JSON.stringify(data)["status"]
        if (status) {
          this.router.navigate(['/dashboard'])
        }
       
    }
    )
  }

}
