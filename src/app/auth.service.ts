import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';// function not a class 
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){//to keep the user loggedin even if the webSite reloaded
      this.saveLogedUser();
    }
   }
  currentUSer= new BehaviorSubject(null);// attribute of behaviorSubject to listen to the change in it ;
  saveLogedUser(){
    let userToken:any =(localStorage.getItem("userToken"));
    this.currentUSer.next(jwtDecode(userToken));
    console.log(this.currentUSer);
  }
  register(newUser:object):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" ,newUser )
  }
  login(loginUser:object):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin" ,loginUser )
  }
  logout(){
    localStorage.removeItem("userToken");
    this.currentUSer.next(null);
    this._Router.navigate(['/login']);
  }
}
