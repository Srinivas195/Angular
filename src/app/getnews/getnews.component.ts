import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

interface Customer{
  headLine : string;
  details : String;
}

@Component({
  selector: 'app-getnews',
  templateUrl: './getnews.component.html',
  styleUrls: ['./getnews.component.css']
})
export class GetnewsComponent implements OnInit {

  constructor(private projectService : ProjectService) {
    this.getCus();
   }

  ngOnInit() {
  }

  data : Customer[];

  getCus(){
    this.projectService.getNews().subscribe(response =>{
      console.log(response);
      this.data =response.data;
    })

  }


}
