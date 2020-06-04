import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  message : string;
  
  ngOnInit() {
  }
  defaultRole = "ROLE_USER";

  postCus(form : NgForm){
    this.projectService.postCustomer(form.value).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      }else if(response.error === true){
        this.message = response.message;

      }
      // form.reset();
    });
}


}

