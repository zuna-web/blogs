import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blogs } from 'src/app/models/blogs';
import { DataService } from 'src/app/services/data.service';
import { Comments } from 'src/app/models/comments';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  @Input() blogId : number;
  comments : Comments[] = [];
  cm: Comment[]=[];

  constructor(public dataService: DataService) { 
    // You can use Promise if you know it
    this.doAsyncTask(()=>this.getAllCommentsForBlog());
  }

  ngOnInit() {
  }

  getAllCommentsForBlog(){
    this.dataService.getCommentsForBlog(this.blogId).subscribe(
      (res) => {
        this.comments = res;
        console.log(this.comments);
      });
  }

  onSubmit(form:NgForm){
    let data = form.value;
    data.bid = this.blogId;
    
    this.dataService.addComment(data).subscribe( (res) => { 
      this.getAllCommentsForBlog();
      this.dataService.setAlert(res.msg, res.error);
     });
    form.reset();
    
  }
  //Alternate to Promise and then 
  //this function as a solution is for beginners to learn asyn functions for delay call backs
  doAsyncTask(callBack){
    setTimeout( () => {
      callBack();
    },1000);
  }

}
