import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

interface Customer{
  customerId : number;
  firstName : String;
  lastName : string;
  gender : String;
  dob: Date;
  emailId : String;
  address : String;
  branch : String;
  aadharNo : String;
  phoneNo : string;
  accountNo : string;
  openingBalance : string;
  password :string;
  pin : number;
  username : string;
}

@Component({
  selector: 'app-listofcustomers',
  templateUrl: './listofcustomers.component.html',
  styleUrls: ['./listofcustomers.component.css']
})
export class ListofcustomersComponent implements OnInit {

message : string;

pageNo=0;
  itemsPerPage=5;
  totalItems;
  fieldName;
  searchValue;
  searchBy;

  data : Customer[];
    constructor(private projectService : ProjectService,
      private router : Router
      ) { 
    this.getCus(null);
  }

  ngOnInit() {
    this.projectService.getCustomerPage(this.pageNo , this.itemsPerPage,null).subscribe(response => {
      console.log(response);
      this.data = response.content;
      this.totalItems = response.totalElements;
    });
  }










  getCus(fieldName){
    this.projectService.getCustomerPage(this.pageNo , this.itemsPerPage,fieldName).subscribe(response => {
      console.log(response);
      this.data = response.content;
      this.totalItems = response.totalElements;
    });
  }


  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getCus(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getCus(this.fieldName); 
  }




  deleteCus(customer) {
    this.projectService.deleteCustomer(customer).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getCus(null);
        this.message= response.message;
        setTimeout(() =>{
        this.message = null;
        },5000);

      }
      
    });
  }


  
  viewCus(customer){
    this.router.navigate(['/viewcus'],{queryParams : customer});

  }

  updateCus(customer){
    this.router.navigate(['/updatecustomer'],{queryParams : customer});

  }

}




// getCus(){
//   this.projectService.getCustomer().subscribe(response =>{
//     console.log(response);
//     this.data =response.data;
//   })

// }

// deleteCus(customer) {
//   this.projectService.deleteCustomer(customer).subscribe(response =>{
//     console.log(response);
//     if(response.error === false){
//       this.getCus();
//       this.message= response.message;
//       setTimeout(() =>{
//       this.message = null;
//       },5000);

//     }
    
//   });
// }

