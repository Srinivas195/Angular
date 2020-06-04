import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-listuserrequest',
  templateUrl: './listuserrequest.component.html',
  styleUrls: ['./listuserrequest.component.css']
})
export class ListuserrequestComponent implements OnInit {

  constructor(private projectService : ProjectService) { 
    this.getBene();
  }

  id : number;

  req;
  ngOnInit() {
  }


  getBene(){
    let userData = JSON.parse(localStorage.getItem('userData'));
   let id = userData.data.customerId;
    this.projectService.getRequestid(id).subscribe(response =>{
      console.log(response);
      this.req = response;
    });

  }


}
