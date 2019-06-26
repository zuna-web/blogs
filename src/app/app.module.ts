import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//------ Components -----
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AdminBlogsComponent } from './components/admin-blogs/admin-blogs.component';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

//----------Services-----------
import { DataService } from './services/data.service';
import { AuthenticationService } from './services/authentication.service'; 
import { AuthGuard } from './guards/auth.guard';

// ---------Router-------------
const appRoutes : Routes = [
  { path :'', component : HomeComponent},
  { path :'about-us', component : AboutUsComponent},
  { path :'contact-us', component : ContactUsComponent},
  { path :'blogs/:id', component : BlogsComponent},
  { path :'login', component : LoginComponent},
  { path : 'admin-dashboard', component : AdminDashboardComponent, canActivate:[AuthGuard]},//, canActivate:[AuthGuard]
  { path : 'admin-blogs', component : AdminBlogsComponent},
  { path : 'admin-comments', component : AdminCommentsComponent, canActivate:[AuthGuard]},
  { path : 'admin-messages', component : AdminMessagesComponent, canActivate:[AuthGuard]},
  { path : 'admin-users', component : AdminUsersComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [    
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogsComponent,
    CommentsComponent,
    NavbarComponent,  
    LoginComponent,  
    AdminBlogsComponent,
    AdminCommentsComponent,
    AdminMessagesComponent,
    AdminUsersComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
