import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private projectService : ProjectService) { }
id:number;
  message : String;
  ngOnInit() {
  }

  postTransferFund(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.postFund(form.value , id).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      } 
      form.reset();
    });
  }

}
