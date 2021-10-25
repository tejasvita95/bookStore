import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../Model/Category';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
 

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  addcategory: CategoryModule = new CategoryModule();

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  isAdminLoggedIn: boolean = true;
  constructor(private route:Router, private matSnackBar:MatSnackBar, private dataService: DataService) { }

  ngOnInit(): void {
  }
  
addCategory(data:any){
  if(window.confirm('Successfully Added!!')){
      this.dataService.addCategory(this.addCategory).subscribe((data:{})=>{
        this.route.navigateByUrl("admin");
      })
  }

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
