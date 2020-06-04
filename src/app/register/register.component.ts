import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  defaultRole = "ROLE_ADMIN";
  defaultAddress = "XXXXXX";
  defaultAcc = "XXXXX";
  defaultOB = "XXXXXXX";
  defaultBranch = "XXXXXX";

  message : string;
  ngOnInit() {
  }

  postCus(form : NgForm){
    this.projectService.postRegister(form.value).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      }
      form.reset();
    });
}




}
