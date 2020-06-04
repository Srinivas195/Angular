import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from "@angular/material";
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog : MatDialog, public projectService: ProjectService ) { }

  ngOnInit() {
  }

  

 
}
