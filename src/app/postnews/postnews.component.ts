import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.css']
})
export class PostnewsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
message:string;
  postnews(form : NgForm){
    this.projectService.postNews(form.value).subscribe(response => {
      console.log(response);
      if(response.error === false){
        this.message = response.message;
      }else if(response.error === true){
        this.message = response.message;

      }
      form.reset();
    });

  }

}
