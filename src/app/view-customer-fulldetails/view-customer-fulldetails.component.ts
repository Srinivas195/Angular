import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

// interface Customer{
//   customer_id : number;
//   firstname : String;
//   lastname : string;
//   gender : String;
//   dob: Date;
//   email_id : String;
//   address : String;
//   branch : String;
//   aadhar_no : String;
//   phone_no : string;
//   account_no : string;
//   opening_balance : string;
//   password :string;
//   pin : number;
//   username : string;

  

// }

@Component({
  selector: 'app-view-customer-fulldetails',
  templateUrl: './view-customer-fulldetails.component.html',
  styleUrls: ['./view-customer-fulldetails.component.css']
})
export class ViewCustomerFulldetailsComponent implements OnInit {

  constructor(private projectService : ProjectService) {
    this.getDetails();
   }

  // data : Customer[];

  details;

  ngOnInit() {
  }



  getDetails(){
    let  userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.projectService.getParticular(id).subscribe(response => {
      console.log(response);
      this.details = response.data;
    });
  }

  // getCus(customer){
  //   this.projectService.getCustomerid(customer).subscribe(response =>{
  //     console.log(response);
  //     this.data =response.data;
  //   });

  // }

}




  

 
