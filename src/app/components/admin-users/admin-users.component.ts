import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users : Users[] = [];
  constructor(public dataService : DataService) { 
    this.getAllUsers();
  }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    let data = form.value;

    if(data.status === undefined)
      data.status = false;
    
    if( data.id === null || form.value.id == undefined){
      this.dataService.addUser(data).subscribe( 
        (res) => {
          this.dataService.setAlert(res.msg,res.error);
          this.getAllUsers();
        });
    }
    else{
      this.dataService.updateUser(data).subscribe(
        (res) => {
          this.dataService.setAlert(res.msg, res.error);
          this.getAllUsers();
        });
    }  
      
    form.reset();
  }

  getAllUsers(){
    this.dataService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      });
  }

  updateUser(data:Users[]){
    this.dataService.user = data;
  }
}
