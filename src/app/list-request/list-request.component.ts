import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';


interface applicant  {
  request_id: number,
  address: String,
  leaves: number,
  phone_number: number,
  request: string,
  status: string;
 
}

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  constructor(private projectService : ProjectService,
    private router: Router) { 
      this.getApplicant(null);
    }

  ngOnInit() {
    this.projectService.getRequestPage(this.pageNo , this.itemsPerPage,null).subscribe(response => {
      console.log(response);
      this.data = response.content;
      this.totalItems = response.totalElements;
    });
  }


 
  message : string;

  pageNo=0;
    itemsPerPage=3;
    totalItems;
    fieldName;
    searchValue;
  
    requests;
  data : applicant[];
    
  
    getApplicant(fieldName) {
      this.projectService.getRequestPage(this.pageNo,this.itemsPerPage,null).subscribe(response => {
        console.log(response);
        this.data =response.content;
        this.totalItems = response.totalElements;
      });
    }

    // getRequest(){
    //   this.projectService.getRequestPage(this.pageNo, this.itemsPerPage, null).subscribe(response =>{
    //     console.log(response);
    //     this.requests= response.content;
    //     this.totalItems= response.totalElements
    //   });
    // }
    
  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getApplicant(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getApplicant(this.fieldName); 
  }


  selectApprove(applicant) {
    this.projectService.updateApprove(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getApplicant(null);
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    });
  }

  selectReject(applicant) {
    this.projectService.updateReject(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.getApplicant(null);
        this.message = response.message;
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
    });
  }

}





