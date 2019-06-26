import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Blogs } from 'src/app/models/blogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs : Blogs[];
  blogLen : number;
  latestBlog : Blogs;

  constructor( private dataService : DataService) {
    this.getAllBlogs();
   }

  ngOnInit() { }

  //Function to get all the blogs 
  getAllBlogs(){
    this.dataService.getAllBlogs().subscribe( (data) => {
      this.blogs = data;

      // get the latest blog to display inside top Jumbotron 
      this.latestBlog = data[this.blogs.length-1];
    });
  }

}
