import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogedUser=false;
  constructor(private _AuthService:AuthService) {

    _AuthService.currentUSer.subscribe(()=>{
      if(_AuthService.currentUSer.getValue()==null){
        this.isLogedUser=false;
      }
      else this.isLogedUser= true ;// user loged and the user details are in current user Attribute .
    })
   }

callLogut(){
  this._AuthService.logout();
}
  ngOnInit(): void {
  }

}
