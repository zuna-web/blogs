import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Users } from 'src/app/models/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin : boolean = false;
  user : Users[]=[];
  isLoggedIn$: Observable<boolean>;      
  constructor(public auth : AuthenticationService) { }

  ngOnInit() {
    //this.user = JSON.parse(localStorage.getItem('currentUser'));
    //this.admin = this.user['login'];
    // this.auth.getAuth().subscribe( (data) =>
    // { this.admin = data; }
    // );
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  onLogout(){
    this.auth.logout();                
  }
}
