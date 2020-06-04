import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  message : string;


  ngOnInit() {
  }

  postBeneficiary(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.postBen(form.value , id).subscribe(response => {
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
