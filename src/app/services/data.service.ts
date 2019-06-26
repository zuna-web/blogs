import { Injectable } from '@angular/core';
import { Observable, throwError } from  'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Blogs } from '../models/blogs';
import { Messages } from '../models/messages';
import { Users } from '../models/users';
import { Comments } from '../models/comments';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost:8080/blogs/php';
  cars : any[];
  blogs : Blogs[]=[];
  message : Messages[] = [];
  messages : Messages[] = [];
  alert : string = '';
  error : boolean = false;
  currentClasses = {};
  user : Users[] = [];
  users : Users[] = [];
  comment : Comments[]=[];

  constructor( private http : HttpClient) {   }

  // Function to Display message
  setAlert(alert:string, error : boolean){
    this.alert = alert;
    this.error = error;
    this.setCurrentClasses();
    return setTimeout( () => { this.alert = null;this.error=false;},5000);
  }
 
  // Function to Bind Error with red or green color
  setCurrentClasses(){
    this.currentClasses = {
      'alert':true,
      'alert-danger':this.error,
      'alert-success':!this.error
    }
  }

  // 1. Function to get all blogs to display on home page
  getAllBlogs(){
   
    return this.http.get(`${this.baseUrl}/list-blogs.php`).pipe(
      map((res) => {
        this.blogs = res['data'];
        return this.blogs;
    }));

  }

  // 2. Function to get single blog by passing id to display on blog page
  getSingleBlog( id : number){    
   
    return this.http.get(`${this.baseUrl}/list-blog.php?id=`+id).pipe(
      map((res) => {
        this.blogs = res['data'];
        return this.blogs;
    }));

  }

  //3. Function to send message from Contact-us page
  addMessage(data : Messages){

    return this.http.post(`${this.baseUrl}/add-message.php`, {data : data}).pipe(
      map( (res) => {
        this.setAlert(res['data'].msg, res['data'].error);        
        return res;
      }));

  }

  //4. Function to get Count of Blogs, Comments, Messages and users to be display on Admin Dashboard
  adminGetDashboard(){

    return this.http.get(`${this.baseUrl}/ad-dashboard.php`).pipe(
      map((res) => {
        return res['data'];
    }));

  }

  getMessages(){

    return this.http.get(`${this.baseUrl}/list-messages.php`).pipe(
      map((res) => {
        this.messages = res['data'];
        return this.messages;
    }));

  }

  deleteMessage(id:number){
    let data = {id:id};
    return this.http.post(`${this.baseUrl}/delete-message.php`,{data:data}).pipe(
      map((res) => {
        this.messages = res['data'];
        return this.messages;
    }));
    
  }

  getAllComments(){

    return this.http.get(`${this.baseUrl}/comments-list.php`).pipe(
      map( (res) => {
        return res['data'];
      }));
  }

  getCommentsForBlog(id:number){

    return this.http.get(`${this.baseUrl}/blog-comments-list.php?id=`+id).pipe(
      map( (res) => {
        return res['data'];
      }));

  }

  addComment(data : Comments){

    return this.http.post(`${this.baseUrl}/add-comment.php`,{data:data}).pipe(
      map((res) => {
        return res['data'];        
    }));

  }

  updateComment(id:number, status : number){
    let data = {id : id, status : status};
    return this.http.post(`${this.baseUrl}/update-comments-list.php`,{data:data}).pipe(
      map( (res) => {
        return res['data'];
      }));
  }
  
  addUser(data:Users){

    return this.http.post(`${this.baseUrl}/add-user.php`, {data : data}).pipe(
      map( (res) => {
        return res['data'];
      }));
  }

  getAllUsers(){

    return this.http.get(`${this.baseUrl}/list-users.php`).pipe(
      map((res) => {
        this.users = res['data'];
        return this.users;
    }));

  }

  updateUser(data : Users){
    
    return this.http.post(`${this.baseUrl}/update-user.php`,{data:data}).pipe(
      map( (res) => {
        return res['data'];
      }));
  }

  addBlog(data:Blogs[]){
    return this.http.post(`${this.baseUrl}/add-blog.php`, {data : data}).pipe(
      map( (res) => {
        return res;
      })
    );
  }

  updateBlog(data : Blogs[]){
    console.log(data);
    return this.http.post(`${this.baseUrl}/update-blog.php`, {data : data}).pipe(
      map( (res) => {
        return res;
      })
    );
 }

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
    }));
  }

   

} // End of Data Service
