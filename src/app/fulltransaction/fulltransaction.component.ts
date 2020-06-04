import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fulltransaction',
  templateUrl: './fulltransaction.component.html',
  styleUrls: ['./fulltransaction.component.css']
})
export class FulltransactionComponent implements OnInit {

  constructor(private projectService : ProjectService) {
    this.getBene(null);
   }
  id : number;
  data;
  message : string;

  pageNo=0;
    itemsPerPage=5;
    totalItems;
    fieldName;
    searchValue;



  ngOnInit() {
    this.projectService.getTransactionPage(this.pageNo , this.itemsPerPage,null).subscribe(response => {
      console.log(response);
      this.data = response.content;
      this.totalItems = response.totalElements;
    });
  }

  getBene(fieldName){
    
    this.projectService.getTransactionPage(this.pageNo,this.itemsPerPage,this.fieldName).subscribe(response =>{
      console.log(response);
      this.data =response.content;
      this.totalItems = response.totalElements;
    });

  }


  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getBene(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getBene(this.fieldName); 
  }
}
