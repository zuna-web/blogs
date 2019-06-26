import { Component, OnInit } from '@angular/core';
import { Messages } from '../../models/messages';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  messages : Messages [] = [];
  
  constructor(public dataService : DataService) { }

  ngOnInit() {  }

  // OnSubmit Functiont to submit contact us form 
  onSubmit(form : NgForm){
    let data = form.value; 
    this.dataService.addMessage(data).subscribe( (res) => { res });
    form.reset();
  }

}
