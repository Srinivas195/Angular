import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string;

  constructor(private userService : ProjectService,
    private router : Router) { }

login(form : NgForm){
  // console.log(form.value);
  this.userService.login(form.value).subscribe(response =>{
    console.log(response);
    if (response.error ){
      this.message = response.message;
    }else{
      localStorage.setItem('userData',JSON.stringify(response));
      if(response.data.role === 'ROLE_ADMIN'){
        this.router.navigateByUrl('/admin');
      }else if(response.data.role === 'ROLE_USER'){
          this.router.navigateByUrl('/user');
      }
    }
  })
}



  ngOnInit() {
  }


}


