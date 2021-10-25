import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  isAdminLoggedIn: boolean = true;

  constructor(private route: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  SignOut(){
    localStorage.clear();
    this.isAdminLoggedIn = false;
    this.route.navigateByUrl("admin");
  }

  SignIn(){
    if(localStorage.getItem("token")=== null){
      this.matSnackBar.open("Please Login First",'ok',{
        duration: 5000
      });
      this.route.navigateByUrl("login");
    }
  }

}
