import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Messages } from 'src/app/models/messages';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  messages : Messages[] = [];
  constructor(public dataService : DataService) { 
    this.getAllMessages();
  }

  ngOnInit() {
  }

  getAllMessages(){
    this.dataService.getMessages().subscribe( 
      (res) =>{
        this.messages = res;
        console.log(res);
      });
  }

  deleteMessage(id: number){
    this.dataService.deleteMessage(id).subscribe(
      (res) =>{
        this.getAllMessages();
      });
  }
}
