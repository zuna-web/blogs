import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  data: any[] = [];
  
  constructor(public dataService : DataService) { 
    this.dataService.adminGetDashboard().subscribe( 
      (res) => {
        this.data = res;
      });
  }

  ngOnInit() {
  }

}
