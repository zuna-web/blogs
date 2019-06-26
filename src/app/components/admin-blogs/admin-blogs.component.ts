import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/models/blogs';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {
  blogs : Blogs[] = [];

  constructor(public dataService : DataService) { 
    this.getAllBlogs();
  }

  ngOnInit() {
  }

  //Function to get all the blogs 
  getAllBlogs(){
    this.dataService.getAllBlogs().subscribe( (data) => {
      this.blogs = data;
      console.log(data);
    });
  }

  updateBlog(data:Blogs[]){
    this.dataService.blogs = data;
  }

  onSubmit(form:NgForm){
    let data = form.value;
    if( data.id === null || form.value.id == undefined){
      this.dataService.addBlog(data).subscribe((res) => {res;});
    }else{
      this.dataService.updateBlog(data).subscribe((res) => {res;});
    }
    this.getAllBlogs();
    form.reset();
  }

}
