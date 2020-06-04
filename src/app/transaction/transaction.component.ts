import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  id : number;
  transaction;
  p: number = 1; 

  constructor(private projectService : ProjectService) {
    this.getBene();
  }

  ngOnInit() {
  }

  getBene(){
    let userData = JSON.parse(localStorage.getItem('userData'));
   let id = userData.data.customerId;
    this.projectService.getTransaction(id).subscribe(response =>{
      console.log(response);
      this.transaction = response;
    });

  }


}
