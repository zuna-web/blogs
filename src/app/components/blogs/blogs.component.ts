import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Blogs } from 'src/app/models/blogs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  id : number;
  blog : Blogs[] = [];  //Single Blog

  constructor( public router:Router, public route:ActivatedRoute, public dataService : DataService) {     
    
    //to get id from URL 
    //e.g. http://localhost:4200/blogs/2  so id=2
    this.id = this.route.snapshot.params['id'];

    //to get single blog with id = this.id
    this.dataService.getSingleBlog(this.id).subscribe( (res) => {
      this.blog = res;
    });

  }

  ngOnInit() {  }

}
