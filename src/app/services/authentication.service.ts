import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../models/users';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //isLoggedIn : boolean= false;
  private loggedIn = new BehaviorSubject<boolean>(false); 
  user : Users;
  baseUrl = 'http://localhost:8080/blogs/php';

  constructor( private http : HttpClient, public router : Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  login(username : string, pass : string){
    
    let data : any = { username : username, pass : pass };   

    return this.http.post<Users>(`${this.baseUrl}/login.php`,{data}).pipe(
      map( (res) => {
        if(res.login){
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.loggedIn.next(true);
          this.router.navigate(['admin-dashboard']);
        }
        else{
          this.loggedIn.next(false);
          this.router.navigate(['login']);
        }
        return res;
      })
    );

  }

  logout() {
      // remove user from local storage to log user out
      this.loggedIn.next(false);
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
  }

  getAuth(){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user.login){
      this.loggedIn.next(true);
    }else{
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable(); 
   
  }
}
