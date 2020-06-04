import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-beneficiary',
  templateUrl: './update-beneficiary.component.html',
  styleUrls: ['./update-beneficiary.component.css']
})
export class UpdateBeneficiaryComponent implements OnInit {

  benToUpdate;

  constructor(private projectService : ProjectService,
    private router : Router,
    private route : ActivatedRoute) 
    { 
      this.route.queryParams.subscribe(data =>{
        this.benToUpdate = data;
        console.log(this.benToUpdate);
      });
    }

  ngOnInit() {
  }

  updatebene(form : NgForm){
    this.projectService.updateBen(form.value).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        form.reset();
       this.router.navigateByUrl('/listben');
      }
    });

  }
}
