import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
  }

message : string;

  postCredit(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.postcredit(form.value , id).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      } 
      form.reset();
    });
  }


}
