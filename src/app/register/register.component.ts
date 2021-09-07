import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router
AuthService
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor (private _AuthService:AuthService,private _Router:Router) { 
    this._AuthService.logout();//to logout the user if he moves to the register page from the url .
  }

  errorMessage :string="";
  registerForm =new FormGroup ({
    first_name:new FormControl(null ,[Validators.required , Validators.maxLength(15) , Validators.minLength(3)]),
    last_name:new FormControl(null ,[Validators.required  ,Validators.maxLength(15) ,Validators.minLength(3) ]),
    email:new FormControl(null , [Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.required ,Validators.pattern('^[A-Z][a-z]{3,8}$')]),//'^[A-Z]\\w{3,15}'
    age:new FormControl(null, [Validators.required ,Validators.min(8),Validators.max(80)])
  })

  submitRegisterForm(form:FormGroup){
this._AuthService.register(form.value).subscribe((registerRespone)=>{
  if(registerRespone.message=="success")
      this._Router.navigate(["/login"]);
  else{
   this.errorMessage= registerRespone.errors.email.message;  
  }
})  }
  ngOnInit(): void {
  }

}
