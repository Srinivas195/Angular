import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

message : string;

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  }


  postAtm(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.postatm(form.value , id).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      } 
      form.reset();
    });
  }

 

}
