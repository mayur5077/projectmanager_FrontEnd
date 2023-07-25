import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata:any;
  userdata:any;

  constructor(private route : Router,private api:ApiService){}


  ngOnInit(): void {
    this.logindata = new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })


  }

  loginform(data:any){
    this.api.post("Authentication/login",data).subscribe((result:any)=>{
      if(result.length == 0){
        alert("envalid ditels")
      }
      else{
        localStorage.setItem("usertype","admin");
        localStorage.setItem("id",result[0].id);
        localStorage.setItem("name",result[0].name);
        localStorage.setItem("email",result[0].email);
        this.route.navigate(["admin/dashbord"]);
      }

    })

    }

  }












