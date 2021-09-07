import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor (private _AuthService:AuthService,private _Router:Router) { 
    this._AuthService.logout();//to logout the user if he moves to the login page from the url .
  }

  errorMessage :string="";

  loginForm =new FormGroup ({
 
    email:new FormControl(null , [Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.required ])//'^[A-Z]\\w{3,15}'
 
  })

  submitloginForm(form:FormGroup){
this._AuthService.login(form.value).subscribe((logInRespone)=>{
  if(logInRespone.message=="success"){ 
      localStorage.setItem("userToken",logInRespone.token);
      this._AuthService.saveLogedUser();
      this._Router.navigate(["/home"]);
    }
  else{
   this.errorMessage= logInRespone.message;  
  }
})  }
  ngOnInit(): void {
  }

}
