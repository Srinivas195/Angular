import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

cusToUpdate;
defaultRole = "ROLE_USER";
  constructor(private route : ActivatedRoute,
    private projectService : ProjectService,
    private router : Router
     ) {
    this.route.queryParams.subscribe(data =>{
      this.cusToUpdate = data;
      console.log(this.cusToUpdate);
    });
   }

   updateCus(form : NgForm){
     this.projectService.updateCustomer(form.value).subscribe(response =>{
       console.log(response);
       if(response.error === false){
         form.reset();
        this.router.navigateByUrl('/list');
       }
     });

   }

  ngOnInit() {
  }

}
