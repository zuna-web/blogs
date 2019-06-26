import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Users[] = [];

  constructor(private auth : AuthenticationService,  private router : Router, public dataService : DataService) { }

  ngOnInit() { }

  onSubmit(form : NgForm){
    
    let data = form.value;
    this.auth.login(data.username, data.pass).subscribe( (res) => { 
          
          if(res.login){
            console.log(res);
          }else{
            // Call SetAlert Function inside dataService to display Errors if any
            this.dataService.setAlert(res.msg, res.error);
            this.router.navigate(['login']);
          } 
        
        });
  } //END of onSubmit Function

}
