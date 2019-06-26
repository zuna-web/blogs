import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css']
})
export class AdminCommentsComponent implements OnInit {

  comments : Comments[] = [];
  constructor(public dataService : DataService) { 
    this.getComments();
  }

  ngOnInit() {  }

  update(id : number, status : number){
    this.dataService.updateComment(id, status).subscribe( (res) => { this.getComments(); });    
  }

  getComments(){
    this.dataService.getAllComments().subscribe( 
      (res) => {
        this.comments = res;
        console.log(res);
      });
  }
}
