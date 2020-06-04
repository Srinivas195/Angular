import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

value = "Requested";

message : string;

  ngOnInit() {
  }

  postRequest(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.postReq(form.value , id).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      }else {
        this.message = response.message;
      }
      form.reset();
    });
}




}
