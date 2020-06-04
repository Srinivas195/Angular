import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

// export interface Beneficiary {

//   beneficiaryId : number;
//   firstName : string;
//   lastName : string;
//   accountNo : number;
//   email : string;
//   phoneNo : number;

// }


@Component({
  selector: 'app-list-of-beneficiary',
  templateUrl: './list-of-beneficiary.component.html',
  styleUrls: ['./list-of-beneficiary.component.css']
})
export class ListOfBeneficiaryComponent implements OnInit {

  id : number;

  constructor(private projectService : ProjectService,
    private router : Router) { 
      this.getBene();
    }

  ngOnInit() {
  }
  message : string;

  beneficiary;

  getBene(){
    let userData = JSON.parse(localStorage.getItem('userData'));
   let id = userData.data.customerId;
    this.projectService.getBen(id).subscribe(response =>{
      console.log(response);
      this.beneficiary = response;
    });

  }

  deleteBene(beneficiary){
    this.projectService.deleteBen(beneficiary).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getBene();
        this.message= response.message;
        setTimeout(() =>{
        this.message = null;
        },5000);

      }
      
    });
  }

  updateBen(benefiaciary){
    this.router.navigate(['/updatebeneficiary'],{queryParams : benefiaciary});

  }



}
