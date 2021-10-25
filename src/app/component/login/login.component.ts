import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
 

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   public message = '';
   
   public form = {
     email: null,
     password:null,
     role: null
   }
    

  constructor(private authService:AuthService, private route: Router) {}

  
  ngOnInit() {
  }
   
  onSubmit(data:any){
    this.authService.login(data).subscribe((response)=>{
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      this.message = "Login successfully";
      alert(this.message);
       
      if(this.form.role === 'user' )
      {
        localStorage.setItem('role', 'user');
        this.route.navigateByUrl('books');
        return;
      }
      if(this.form.role === 'admin')
      {
        localStorage.setItem('role', 'admin');
        this.route.navigateByUrl('admin');
        return;
      }
       
    }, (error)=>{
      console.log(error.message)
    })
  }

}
